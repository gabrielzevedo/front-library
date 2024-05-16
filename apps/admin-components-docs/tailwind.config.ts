import defaultPreset from '@gabrielzevedo/tailwindcss-config'
import type { Config } from 'tailwindcss'

import { getAdminComponentsPath } from './utils'

const config: Pick<Config, 'presets' | 'content'> = {
  presets: [defaultPreset],
  content: [getAdminComponentsPath('/src/**/*.*')]
}

export default config
