import type { Config } from 'tailwindcss'
import defaultPreset from '@gabrielzevedo/tailwindcss-config'

const config: Pick<Config, 'presets' | 'content'> = {
  presets: [defaultPreset],
  content: [...(defaultPreset.content as Array<string>), './stories/**/*.{js,ts,jsx,tsx,mdx}']
}

export default config
