const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const fs = require('fs-extra')

module.exports = defineConfig({
  e2e: {
    "baseUrl":"https://www.demoblaze.com/",
      setupNodeEvents(on, config) {
          allureWriter(on, config);
          return config;
      },
      env: {
        allureReuseAfterSpec: true
    }
  },
  "watchForFileChanges": false,
  "video": false,
  //"defaultCommandTimeout":10000
  // "viewportWidth":360,
  // "viewportHeight":640

});


require('@applitools/eyes-cypress')(module);
