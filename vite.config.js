import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000, // Set custom port
    open: true, // Auto-open in browser
  },
  build: {
    outDir: "dist", // Output directory
    sourcemap: true, // Enable source maps for debugging
  },
  resolve: {
    alias: {
      "@": "/src", // Shorter imports
    },
  },
});
