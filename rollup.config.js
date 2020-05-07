import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default [
  {
    input: 'src/main.js',
		external: ['ms'],
    output: [
      { file: pkg.browser, format: 'umd', name: 'howLongUntilLunch' },
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      resolve(),
      commonjs()
    ]
  }
];