import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.ttf"], // Include font files as assets if needed
  css: {
    preprocessorOptions: {
      scss: {
        // Add this if you use SCSS with Swiper customizations
        additionalData: `@import "swiper/swiper.scss";`,
      },
    },
  },
  optimizeDeps: {
    include: ['swiper/css', 'swiper/css/navigation', 'swiper/css/pagination'],
  },  
});
