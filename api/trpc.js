/*
 * Site LCL — Point d'entrée API serverless Vercel.
 *
 * Ce fichier expose le routeur tRPC (virement, auth) comme fonction
 * serverless Vercel. Les appels sur /api/trpc/* sont acheminés par le
 * rewriter de vercel.json vers cette fonction.
 *
 * IMPORTANT : les req/res de Vercel sont des objets IncomingMessage /
 * ServerResponse Node.js natifs (ou des wrappers compatibles). Le
 * routeur tRPC s'attend à un contexte { req, res, user } créé par
 * createContext() de server/routers.ts, qui utilise
 * CreateExpressContextOptions. Les objets Vercel sont compatibles car
 * l'adapter Express de tRPC est simplement un thin wrapper autour de
 * req/res Node — et Vercel fournit exactement ça.
 *
 * Nous ne passons PAS par l'adapter Express de tRPC (bug en 11.18 avec
 * req.originalUrl undefined). On crée le contexte directement.
 *
 * L'application est 100 % autonome : les 100 comptes vivent dans le
 * client (localStorage), et le serveur ne fait que valider + exécuter
 * les virements (déduction, SMTP, PDF). Pas de base de données.
 */
// Note : Vercel @vercel/node utilise esbuild qui ne résout pas les alias
// tsconfig (@shared/*). Nous importons directement le fichier.
import { appRouter, createContext } from "./routers.ts";

export default function trpcApi(req, res) {
  // Mock léger pour les méthodes de cookie (utilisées par auth.logout)
  if (!res.clearCookie) res.clearCookie = () => {};
  if (!res.cookie) res.cookie = () => {};

  // Vercel fournit req.originalUrl (le path sans query), mais dans
  // certains cas il peut être undefined. On le calcule.
  if (!req.originalUrl) {
    req.originalUrl = req.url.split("?")[0];
  }

  // L'adapter Express tRPC est un thin wrapper : on peut appeler
  // createContext directement avec les req/res de Vercel (qui sont
  // des IncomingMessage/ServerResponse natifs ou compatibles).
  // Ensuite on utilise le fetchRequestHandler pour traiter la requête.
  createContext({ req: req, res: res }).then(async (ctx) => {
    // Construire un Request fetch à partir du IncomingMessage
    const protocol =
      req.headers["x-forwarded-proto"] ||
      (req.socket && "encrypted" in req.socket && req.socket.encrypted
        ? "https"
        : "http");
    const host = req.headers.host || "localhost";
    const url = `${protocol}://${host}${req.url}`;

    // Collecter les headers (filtrer les pseudo-headers HTTP/2)
    const headers = {};
    for (const key in req.headers) {
      if (key.startsWith(":")) continue;
      const val = req.headers[key];
      headers[key] = Array.isArray(val) ? val.join(", ") : val;
    }

    // Collecter le body
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", async () => {
      try {
        const requestInit = { method: req.method, headers };
        if (body) requestInit.body = body;

        const fetchRequest = new Request(url, requestInit);

        // Utiliser le fetchRequestHandler de tRPC
        const { fetchRequestHandler } = await import(
          "@trpc/server/adapters/fetch"
        );

        const response = await fetchRequestHandler({
          endpoint: "/api/trpc",
          req: fetchRequest,
          router: appRouter,
          createContext: async () => ctx,
          onError({ error }) {
            console.error("[tRPC error]", error);
          },
        });

        // Écrire la réponse dans le ServerResponse
        res.statusCode = response.status;
        for (const [key, val] of response.headers.entries()) {
          res.setHeader(key, val);
        }
        const respBody = await response.text();
        res.end(respBody);
      } catch (err) {
        console.error("[trpcApi error]", err);
        res.statusCode = 500;
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify({ error: { message: String(err) } }));
      }
    });
  });
}
