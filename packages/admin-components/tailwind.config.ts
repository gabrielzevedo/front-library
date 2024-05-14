import defaultPreset from '@gabrielzevedo/tailwindcss-config'
import type { Config } from 'tailwindcss'

const config: Pick<Config, 'presets'> = {
  presets: [defaultPreset]
}

export default config
