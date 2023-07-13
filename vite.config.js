import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "BassieNL Community App",
        short_name: "BassieNL",
        description: "BassieNL Community App - The best community app ever",
        theme_color: "#7289DA",
        icons: [
          {
            src: "/assets/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icon-256x256.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    react(),
  ],
});
