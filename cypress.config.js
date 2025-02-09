const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;


module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: false,
    reportFilename: '[status]_[datetime]-report',
    timestamp: 'shortDate',
    charts: true,
    reportPageTitle: 'Colispo Test Suite Report',
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  e2e: {
    specPattern: [
      'cypress/e2e/features/*.feature', // Cucumber feature files

    ],

    // Explicitly set the stepDefinitions folder for Cucumber
    stepDefinitions: 'cypress/e2e/step_definitions/',

    setupNodeEvents(on, config) {
      // Task for logging
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });

      // Set up the Cucumber preprocessor
      on('file:preprocessor', cucumber());
    },
  },
});
