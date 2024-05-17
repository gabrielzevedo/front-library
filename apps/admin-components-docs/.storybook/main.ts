import type { StorybookConfig } from '@storybook/react-vite'
import { getAbsolutePath, getAdminComponentsPath } from '../utils'

const config: StorybookConfig = {
  // stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // stories: [join(ADMIN_COMPONENTS_PATH, '/src/**/*.stories.@(js|jsx|ts|tsx)'), '../docs/**/*.mdx'],
  stories: [
    '../stories/*.stories.tsx',
    '../stories/*.mdx',
    getAdminComponentsPath('/src/**/*.stories.tsx'),
    getAdminComponentsPath('/src/**/*.doc.mdx')
  ],
  addons: [
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials')
    // getAbsolutePath('@chromatic-com/storybook'),
    // getAbsolutePath('@storybook/addon-interactions')
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {}
  }
  // docs: {
  //   autodocs: true
  // }
  // viteFinal: async (config) => {
  //   if (config?.resolve) {
  //     config.resolve.alias = {
  //       ...config.resolve.alias,
  //       '@': getAdminComponentsPath('src')
  //     }
  //   }
  //   return config
  // }
}
export default config
