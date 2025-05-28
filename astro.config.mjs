import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

import vercel from "@astrojs/vercel";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: "static",

  adapter: vercel(),
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "CabinetGrotesk",
        cssVariable: "--font-cabinet",
        variants: [
          {
            weight: 100,
            style: "normal",
            src: ["./src/assets/fonts/CabinetGrotesk-Thin.woff2"],
          },
          {
            weight: 200,
            style: "normal",
            src: ["./src/assets/fonts/CabinetGrotesk-Extralight.woff2"],
          },
          {
            weight: 300,
            style: "normal",
            src: ["./src/assets/fonts/CabinetGrotesk-Light.woff2"],
          },
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/CabinetGrotesk-Regular.woff2"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/CabinetGrotesk-Medium.woff2"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/CabinetGrotesk-Bold.woff2"],
          },
          {
            weight: 800,
            style: "normal",
            src: ["./src/assets/fonts/CabinetGrotesk-Extrabold.woff2"],
          },
          {
            weight: 900,
            style: "normal",
            src: ["./src/assets/fonts/CabinetGrotesk-Black.woff2"],
          },
        ],
      },
    ],
  },

  integrations: [
    sanity({
      projectId: "5fe5lton",
      dataset: "production",
      useCdn: false,
    }),
    react(),
    partytown(),
  ],
});

