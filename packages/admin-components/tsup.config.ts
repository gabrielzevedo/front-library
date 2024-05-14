import { sassPlugin } from 'esbuild-sass-plugin'
import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ['src/index.ts', '!src/**/*.{spec,test}.*'],
  format: ['esm'],
  dts: true,
  minify: true,
  clean: true,
  external: ['react'],
  esbuildPlugins: [sassPlugin()],
  ...options
}))
