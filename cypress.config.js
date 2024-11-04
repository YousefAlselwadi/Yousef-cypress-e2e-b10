import { defineConfig } from "cypress";
export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  // retries 2;
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});