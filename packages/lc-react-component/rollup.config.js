import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import url from 'rollup-plugin-url'
import external from 'rollup-plugin-peer-deps-external'

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
  plugins: [
    external(),
    url(),
    commonjs(),
    postcss({
      modules: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    typescript()
  ]
}
