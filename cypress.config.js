const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5mtt1j',
  
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do curso Qazando',
      reportPageTitle: 'Projeto do curso Qazando'
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
