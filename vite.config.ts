import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  // For GitHub Pages at https://<user>.github.io/<repo>/ set:
  // base: "/<repo>/",
  base: "/",
});
