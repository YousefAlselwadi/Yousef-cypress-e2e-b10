import { defineConfig } from "cypress";
export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  // retries 2;
  env: {
    SITE_URL: process.env.UI_URL,
    UI_USERNAME: process.env.UI_USERNAME,
    UI_PASSWORD: process.env.UI_PASSWORD,
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://www.techglobal-training.com'
  },
});