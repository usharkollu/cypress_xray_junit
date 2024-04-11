const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.js',
    reporter: 'cypress-xray-junit-reporter',
    reporterOptions: {
      mochaFile: './reports/junit_report_[hash].xml',
      useFullSuiteTitle: false,
      jenkinsMode: true,
      xrayMode: true, // if JiraKey are set correctly inside the test the XML report will contain the JiraKey value
      attachScreenshot: true, // if a test fails, the screenshot will be attached to the XML report and imported into xray
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
