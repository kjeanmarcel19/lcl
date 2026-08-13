/*
 * Site LCL — Routeur tRPC autonome.
 *
 * Ce fichier importe ses primitives depuis ./trpc (fichier local, sans
 * dépendance au dossier _core). Le projet fonctionne même si _core est
 * absent de l'archive (c'est le cas quand le code est téléchargé depuis
 * l'interface).
 */
import { COOKIE_NAME } from "../shared/const";
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { CookieOptions, Request } from "express";
import { virementRouter } from "./virement";
import { publicProcedure, router } from "./trpc";

// ---------------------------------------------------------------------------
// Options de cookie de session (aucune dépendance à _core/cookies)
// ---------------------------------------------------------------------------
function isSecureRequest(req: Request): boolean {
  if (req.protocol === "https") return true;
  const forwardedProto = req.headers["x-forwarded-proto"];
  if (!forwardedProto) return false;
  const protoList = Array.isArray(forwardedProto)
    ? forwardedProto
    : forwardedProto.split(",");
  return protoList.some((proto) => proto.trim().toLowerCase() === "https");
}

export function getSessionCookieOptions(
  req: Request
): Pick<CookieOptions, "httpOnly" | "path" | "sameSite" | "secure"> {
  return {
    httpOnly: true,
    path: "/",
    sameSite: "none",
    secure: isSecureRequest(req),
  };
}

// ---------------------------------------------------------------------------
// Contexte tRPC : la base de données Manus n'est pas utilisée par le site
// LCL (les 100 comptes vivent dans client/src/data/comptes.ts et la session
// côté client via localStorage).
// ---------------------------------------------------------------------------
export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  return {
    req: opts.req,
    res: opts.res,
    user: null,
  };
}

// ---------------------------------------------------------------------------
// Routeurs
// ---------------------------------------------------------------------------
export const appRouter = router({
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  virement: virementRouter,
});

export type AppRouter = typeof appRouter;
