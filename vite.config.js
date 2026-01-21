import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables" as *;\n`,
      },
    },
  },
});
