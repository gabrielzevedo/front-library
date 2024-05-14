import type { Preview } from '@storybook/react'
import { withThemeByDataAttribute } from '@storybook/addon-themes'

import '@gabrielzevedo/tailwindcss-config/styles/globals.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true
      // matchers: {
      //   color: /(background|color)$/i,
      //   date: /Date$/i
      // }
    },
    options: {
      storySort: {
        order: ['Icons', 'Components']
      }
    }
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
      parentSelector: 'html'
    })
  ]
}

export default preview
