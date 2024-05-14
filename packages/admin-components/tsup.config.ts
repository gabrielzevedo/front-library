import { sassPlugin } from 'esbuild-sass-plugin'
import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ['src/components/Button/index.ts', 'src/components/Icon/index.ts', 'src/components/IconCircular/index.ts'],
  format: ['esm'],
  dts: true,
  minify: true,
  clean: true,
  external: ['react'],
  esbuildPlugins: [sassPlugin()],
  ...options
}))
