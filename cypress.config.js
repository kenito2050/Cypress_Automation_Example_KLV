const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "f3qpud",
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  "video": true,
  "screenshotsFolder": "images",

  env: {
    url : "https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    specPattern:'cypress/integration/*/*.js'
  },
});
