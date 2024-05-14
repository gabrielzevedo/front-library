import { sassPlugin } from 'esbuild-sass-plugin'
import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ['src/components/Button', 'src/components/Icon', 'src/components/IconCircular'],
  format: ['esm'],
  dts: true,
  minify: true,
  clean: true,
  external: ['react'],
  esbuildPlugins: [sassPlugin()],
  ...options
}))
