/*
 * Site LCL — Serveur Express autonome (dev + production).
 *
 * Ce fichier est auto-suffisant : il fait tourner Express + tRPC (API virement
 * avec envoi SMTP) et, en mode développement, il sert le client via Vite
 * (hot reload, index.html lu dans client/). En production, il sert les
 * fichiers buildés de dist/public.
 *
 * Aucun fichier du dossier _core n'est requis : ce serveur importe
 * directement server/routers.ts (tRPC) et server/virement.ts (SMTP).
 *
 * Démarrage :
 *   npm run dev    -> mode développement (Vite + watcher tsx)
 *   npm run build  -> build production
 *   npm run start  -> mode production (fichiers statiques)
 */
import "dotenv/config";

// Fallback : si NODE_ENV n'est pas définie (cas fréquent sur Windows),
// le mode développement est utilisé pour pouvoir lancer "npm run dev"
// sans avoir besoin d'un fichier .env ni de cross-env.
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "development";
}

import express from "express";
import { createServer } from "http";
import fs from "fs";
import net from "net";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import viteConfig from "../vite.config";
import { appRouter, createContext } from "./routers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const s = net.createServer();
    s.listen(port, () => s.close(() => resolve(true)));
    s.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) return port;
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // API tRPC (virement, auth, etc.)
  const { createExpressMiddleware } = await import(
    "@trpc/server/adapters/express"
  );
  app.use(
    "/api/trpc",
    createExpressMiddleware({ router: appRouter, createContext })
  );

  if (process.env.NODE_ENV === "development") {
    // ---- Mode développement : Vite en middleware ----
    const vite = await createViteServer({
      ...viteConfig,
      configFile: false,
      server: {
        middlewareMode: true,
        hmr: { server },
        allowedHosts: true as const,
      },
      appType: "custom",
    });

    app.use(vite.middlewares);

    app.use("*", async (req, res, next) => {
      try {
        const indexHtml = path.resolve(__dirname, "..", "client", "index.html");
        let template = await fs.promises.readFile(indexHtml, "utf-8");
        template = template.replace(
          `<script type="module" src="/src/main.tsx"></script>`,
          `<script type="module" src="/src/main.tsx?v=${Date.now()}"></script>`
        );
        const page = await vite.transformIndexHtml(req.originalUrl, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(page);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    // ---- Mode production : fichiers statiques buildés ----
    const distPath = path.resolve(__dirname, "..", "dist", "public");
    if (!fs.existsSync(distPath)) {
      console.error(
        `Le dossier de build est introuvable : ${distPath}. Exécutez "npm run build" d'abord.`
      );
    }
    app.use(express.static(distPath));
    app.use("*", (_req, res) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);
  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} déjà utilisé, j'utilise le port ${port}`);
  }

  server.listen(port, () => {
    console.log(`Site LCL disponible sur http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
