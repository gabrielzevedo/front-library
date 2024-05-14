import eslintConfig from '@gabrielzevedo/eslint-config'
import storybookConfig from 'eslint-plugin-storybook'

export default [
  eslintConfig,
  {
    plugins: {
      storybook: storybookConfig
    }
  }
]

// TODO: Upgrade to flat config when launched https://github.com/storybookjs/eslint-plugin-storybook
