import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com', // ← sito su cui gira il test
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
        on('before:browser:launch', (browser, launchOptions) => {
          // Solo per browser basati su Chromium (Chrome, Edge, Electron)
          if (browser.family === 'chromium') {
            launchOptions.args.push('--incognito')
          }
          return launchOptions
        })
        return config
      },
  },
})