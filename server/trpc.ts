/*
 * Site LCL — Définitions tRPC autonomes.
 *
 * Ce fichier remplace l'import de _core/trpc.ts : il contient initTRPC,
 * les procedures et le type de contexte. Aucun fichier du dossier _core
 * n'est requis — le projet fonctionne même si _core est absent.
 */
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";

/**
 * Contexte tRPC minimal. Le site LCL n'utilise pas la base de données
 * Manus : les 100 comptes vivent dans client/src/data/comptes.ts et la
 * session est gérée côté client via localStorage. `user` reste null.
 */
export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: null;
};

const t = initTRPC.context<TrpcContext>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(
  t.middleware((opts) => {
    const { ctx, next } = opts;
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Please login" });
    }
    return next({ ctx });
  })
);

export const adminProcedure = t.procedure.use(
  t.middleware((opts) => {
    const { ctx, next } = opts;
    if (!ctx.user) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You do not have required permission",
      });
    }
    return next({ ctx });
  })
);
