import { defineConfig } from 'rollup';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
    // ES Module 构建
    {
        input: 'src/index.js',
        output: {
            file: 'dist/primevuekit.esm.js',
            format: 'es',
            sourcemap: true
        },
        plugins: [
            alias({
                entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
            }),
            resolve({
                preferBuiltins: false
            }),
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
                presets: ['@babel/preset-env']
            })
        ],
        external: ['vue', 'primevue']
    },

    // UMD 构建 (用于浏览器)
    {
        input: 'src/index.js',
        output: {
            file: 'dist/primevuekit.umd.js',
            format: 'umd',
            name: 'PrimeVueKit',
            globals: {
                vue: 'Vue',
                primevue: 'PrimeVue'
            },
            sourcemap: true
        },
        plugins: [
            alias({
                entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
            }),
            resolve({
                preferBuiltins: false
            }),
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
                presets: ['@babel/preset-env']
            }),
            terser()
        ],
        external: ['vue', 'primevue']
    }
]);
