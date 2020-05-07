import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default [
  {
    input: 'src/main.js',
		external: ['ms'],
    output: [
      {
        name: 'howLongUntilLunch',
        file: pkg.browser,
        format: 'umd'
      },
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins: [
      resolve(),
      commonjs()
    ]
  }
];