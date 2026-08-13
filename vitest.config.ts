import { defineConfig } from "vitest/config";
import { transformSync } from "esbuild";
import path from "path";

const templateRoot = path.resolve(import.meta.dirname);
const serverDir = path.resolve(templateRoot, "server");

export default defineConfig({
  root: templateRoot,
  // Évite que vite-plugin-manus-runtime transforme les fichiers server/
  // avec son transformateur SSR qui injecte __vite_ssr_exportName__ et fait
  // échouer vitest (ReferenceError). Les fichiers server/ sont compilés
  // par esbuild uniquement.
  plugins: [
    {
      name: "server-files-esbuild-only",
      enforce: "pre",
      transform(code, id) {
        const file = path.resolve(id.split("?")[0]);
        if (file.startsWith(serverDir) && file.endsWith(".ts") && !file.endsWith(".test.ts") && !file.endsWith(".spec.ts")) {
          // Compilation esbuild : supprime les types et garde les import/export ESM.
          const out = transformSync(code, {
            loader: "ts",
            format: "esm",
            target: "esnext",
            sourcefile: id,
          });
          return { code: out.code, map: out.map };
        }
        return undefined;
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(templateRoot, "client", "src"),
      "@shared": path.resolve(templateRoot, "shared"),
      "@assets": path.resolve(templateRoot, "attached_assets"),
    },
  },
  test: {
    environment: "node",
    include: ["server/**/*.test.ts", "server/**/*.spec.ts"],
  },
});
