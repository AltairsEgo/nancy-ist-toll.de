import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig(({ mode }) => {
  // If you deploy to GitHub Pages under a repo name, set VITE_BASE="/repo-name/"
  // Otherwise leave it "/" (Vercel/Netlify/custom domain).
  const base = "/";

  return {
    base,
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 5173,
      open: true,
      strictPort: true,
    },
    preview: {
      port: 4173,
      strictPort: true,
    },
    build: {
      outDir: "dist",
      sourcemap: mode !== "production", // nice for debugging; can set true if you want always
      rollupOptions: {
        output: {
          // Keeps chunk names readable in dev-like builds
          entryFileNames: "assets/[name]-[hash].js",
          chunkFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash][extname]",
        },
      },
    },
  };
});
