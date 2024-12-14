import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
  server: {
    host: "0.0.0.0", // Ensures Docker can bind to the container
    port: 5173,      // Vite's default port
    strictPort: true, // Prevent fallback to a random port
    watch: {
      usePolling: true, // Ensures compatibility with Docker file system
    },
  },
});
