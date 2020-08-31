import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import sourceMaps from 'rollup-plugin-sourcemaps'
import json from 'rollup-plugin-json'
import nodePolyfills from 'rollup-plugin-node-polyfills'

const pkg = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  watch: {
    include: 'src/**'
  },
  // external: ['crypto-js'],
  plugins: [
    // Allow json resolution
    json(),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve({
      preferBuiltins: true
    }),
    // compile typescript
    typescript(),
    // Resolve source maps to the original source
    sourceMaps(),
    nodePolyfills()
  ]
}
