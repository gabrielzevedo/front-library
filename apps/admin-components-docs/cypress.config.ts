import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'

import { getAdminComponentsPath } from './utils'

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    },
    screenshotOnRunFailure: false,
    video: false,
    specPattern: getAdminComponentsPath('/src/**/*.spec.tsx'),
    setupNodeEvents(on) {
      on('file:preprocessor', vitePreprocessor())
    }
  },
  e2e: {
    supportFile: false
  }
})
