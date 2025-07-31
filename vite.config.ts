import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { SEO_CONSTANTS } from "./src/lib/seo-constants";

// Vite plugin to inject constants into HTML
const injectConstantsPlugin = (): Plugin => {
  return {
    name: 'inject-constants',
    transformIndexHtml: {
      order: 'pre',
      handler(html: string) {
        return html
          // Contact information
          .replace(/\{\{CONTACT_PHONE\}\}/g, SEO_CONSTANTS.CONTACT_PHONE)
          .replace(/\{\{CONTACT_EMAIL\}\}/g, SEO_CONSTANTS.CONTACT_EMAIL)
          .replace(/\{\{CONTACT_LOCATION\}\}/g, SEO_CONSTANTS.CONTACT_LOCATION)
          .replace(/\{\{SERVICE_AREA\}\}/g, SEO_CONSTANTS.SERVICE_AREA)
          // Site information
          .replace(/\{\{SITE_NAME\}\}/g, SEO_CONSTANTS.SITE_NAME)
          .replace(/\{\{SITE_URL\}\}/g, SEO_CONSTANTS.SITE_URL)
          // Business information
          .replace(/\{\{BUSINESS_NAME\}\}/g, SEO_CONSTANTS.BUSINESS_NAME)
          .replace(/\{\{BUSINESS_ALTERNATE_NAME\}\}/g, SEO_CONSTANTS.BUSINESS_ALTERNATE_NAME)
          .replace(/\{\{BUSINESS_DESCRIPTION\}\}/g, SEO_CONSTANTS.BUSINESS_DESCRIPTION)
          // Meta information
          .replace(/\{\{META_TITLE\}\}/g, SEO_CONSTANTS.META_TITLE)
          .replace(/\{\{META_DESCRIPTION\}\}/g, SEO_CONSTANTS.META_DESCRIPTION)
          .replace(/\{\{META_KEYWORDS\}\}/g, SEO_CONSTANTS.META_KEYWORDS)
          // Images
          .replace(/\{\{OG_IMAGE\}\}/g, SEO_CONSTANTS.OG_IMAGE)
          .replace(/\{\{LOGO_IMAGE\}\}/g, SEO_CONSTANTS.LOGO_IMAGE)
          // Operating hours
          .replace(/\{\{OPENING_HOURS\}\}/g, SEO_CONSTANTS.OPENING_HOURS)
          // Coordinates
          .replace(/\{\{LATITUDE\}\}/g, SEO_CONSTANTS.LATITUDE.toString())
          .replace(/\{\{LONGITUDE\}\}/g, SEO_CONSTANTS.LONGITUDE.toString())
          .replace(/\{\{SERVICE_RADIUS\}\}/g, SEO_CONSTANTS.SERVICE_RADIUS.toString());
      }
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    injectConstantsPlugin(),
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-tooltip'],
          icons: ['lucide-react'],
        },
      },
    },
    // Enable source maps for better debugging
    sourcemap: mode === 'development',
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
}));
