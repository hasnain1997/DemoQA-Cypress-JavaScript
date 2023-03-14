import { defineConfig } from 'cypress'

export default defineConfig({

  "defaultCommandTimeout" : 6000,
  "chromeWebSecurity": false,
  "reporter": "mochawesome",
  "reporterOptions": {
    "charts": true,
    "overwrite": false,
    "html": false,
    "json": true,
    "reportDir": "cypress/report"
  },


  e2e: {
    "baseUrl" : "https://demoqa.com/",

    setupNodeEvents(on, config) {
      // implement node event listeners here


      on('task', {
        setGlobal(value: any) {
          config.env.data = value
          return null;
        },

        getGlobal() {
          return config.env.data
        },
      })

    },
  },
  includeShadowDom: true

})
