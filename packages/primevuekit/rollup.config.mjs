import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import vue from '@vitejs/plugin-vue';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 环境变量配置
process.env.INPUT_DIR = process.env.INPUT_DIR || './src/';
process.env.OUTPUT_DIR = process.env.OUTPUT_DIR || './dist/';

// 别名配置
const ALIAS_ENTRIES = [
    { find: '@', replacement: path.resolve(__dirname, './src') },
    { find: '@primevue/forms/useform', replacement: path.resolve(__dirname, './src/useform/index.js') }
];

// 外部依赖配置
const EXTERNAL_DEPS = ['vue', 'primevue', 'primeicons', 'date-fns', /^primevue\/.*/, /^@primevue\/.*/, /^@primeuix\/.*/];

// 全局变量映射
const GLOBAL_VARS = {
    vue: 'Vue',
    primevue: 'PrimeVue',
    primeicons: 'PrimeIcons',
    'date-fns': 'dateFns'
};

// 构建入口管理
const ENTRY = {
    entries: [],
    format: {
        es({ input, output }) {
            ENTRY.entries.push({
                input,
                output: {
                    file: `${output}.mjs`,
                    format: 'es',
                    sourcemap: true
                },
                plugins: [
                    vue({
                        script: {
                            fs: {
                                fileExists: fs.existsSync,
                                readFile: (file) => fs.readFileSync(file, 'utf-8'),
                                realpath: fs.realpathSync
                            },
                            babelParserPlugins: ['typescript', 'decorators-legacy']
                        }
                    }),
                    alias({
                        entries: ALIAS_ENTRIES
                    }),
                    resolve({
                        preferBuiltins: false
                    }),
                    commonjs(),
                    typescript({
                        tsconfig: './tsconfig.json',
                        declaration: false, // 类型声明文件单独处理
                        declarationMap: false
                    }),
                    babel({
                        babelHelpers: 'bundled',
                        exclude: 'node_modules/**',
                        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
                                    }
                                }
                            ],
                            '@babel/preset-typescript'
                        ]
                    })
                ],
                external: EXTERNAL_DEPS
            });
        },
        cjs({ input, output }) {
            ENTRY.entries.push({
                input,
                output: {
                    file: `${output}.cjs`,
                    format: 'cjs',
                    sourcemap: true,
                    exports: 'auto'
                },
                plugins: [
                    vue({
                        script: {
                            fs: {
                                fileExists: fs.existsSync,
                                readFile: (file) => fs.readFileSync(file, 'utf-8'),
                                realpath: fs.realpathSync
                            },
                            babelParserPlugins: ['typescript', 'decorators-legacy']
                        }
                    }),
                    alias({
                        entries: ALIAS_ENTRIES
                    }),
                    resolve({
                        preferBuiltins: false
                    }),
                    commonjs(),
                    typescript({
                        tsconfig: './tsconfig.json',
                        declaration: false,
                        declarationMap: false
                    }),
                    babel({
                        babelHelpers: 'bundled',
                        exclude: 'node_modules/**',
                        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        node: '16'
                                    }
                                }
                            ],
                            '@babel/preset-typescript'
                        ]
                    })
                ],
                external: EXTERNAL_DEPS
            });
        },
        umd({ name, input, output }) {
            ENTRY.entries.push({
                input,
                output: {
                    file: `${output}.umd.js`,
                    format: 'umd',
                    name: name ?? 'PrimeVueKit',
                    globals: GLOBAL_VARS,
                    sourcemap: true
                },
                plugins: [
                    vue({
                        script: {
                            fs: {
                                fileExists: fs.existsSync,
                                readFile: (file) => fs.readFileSync(file, 'utf-8'),
                                realpath: fs.realpathSync
                            },
                            babelParserPlugins: ['typescript', 'decorators-legacy']
                        }
                    }),
                    alias({
                        entries: ALIAS_ENTRIES
                    }),
                    resolve({
                        preferBuiltins: false,
                        browser: true
                    }),
                    commonjs(),
                    typescript({
                        tsconfig: './tsconfig.json',
                        declaration: false,
                        declarationMap: false
                    }),
                    babel({
                        babelHelpers: 'bundled',
                        exclude: 'node_modules/**',
                        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
                                    }
                                }
                            ],
                            '@babel/preset-typescript'
                        ]
                    }),
                    terser()
                ],
                external: EXTERNAL_DEPS
            });
        }
    }
};

// 添加主库构建
function addLibrary() {
    ENTRY.format.es({
        input: process.env.INPUT_DIR + 'index.js',
        output: process.env.OUTPUT_DIR + 'index'
    });
}

// 添加组件构建
function addComponents() {
    try {
        fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR), { withFileTypes: true })
            .filter((dir) => dir.isDirectory())
            .forEach(({ name: folderName }) => {
                try {
                    const componentFiles = fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR + folderName));

                    componentFiles.forEach((file) => {
                        const name = file.split(/(.vue)$|(.js)$|(.ts)$/)[0].toLowerCase();

                        // 构建组件主文件
                        if (name === folderName.toLowerCase()) {
                            const input = process.env.INPUT_DIR + folderName + '/' + file;
                            const output = process.env.OUTPUT_DIR + folderName + '/index';

                            ENTRY.format.es({ input, output });
                        }
                    });
                } catch (error) {
                    console.warn(`Warning: Cannot read directory ${folderName}:`, error.message);
                }
            });
    } catch (error) {
        console.warn('Warning: Cannot read components directory:', error.message);
    }
}

// 添加样式构建
function addStyles() {
    try {
        fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR), { withFileTypes: true })
            .filter((dir) => dir.isDirectory())
            .forEach(({ name: folderName }) => {
                try {
                    const styleDir = path.resolve(__dirname, process.env.INPUT_DIR + folderName + '/style');
                    if (fs.existsSync(styleDir)) {
                        fs.readdirSync(styleDir).forEach((file) => {
                            if (/\.js$|\.ts$/.test(file)) {
                                const input = process.env.INPUT_DIR + folderName + '/style/' + file;
                                const output = process.env.OUTPUT_DIR + folderName + '/style/index';

                                ENTRY.format.es({ input, output });
                            }
                        });
                    }
                } catch (error) {
                    console.warn(`Warning: Cannot read style directory for ${folderName}:`, error.message);
                }
            });
    } catch (error) {
        console.warn('Warning: Cannot read styles directory:', error.message);
    }
}

// 添加解析器构建
function addResolvers() {
    try {
        const resolversDir = path.resolve(__dirname, process.env.INPUT_DIR + 'resolvers');
        if (fs.existsSync(resolversDir)) {
            fs.readdirSync(resolversDir, { withFileTypes: true })
                .filter((dir) => dir.isDirectory())
                .forEach(({ name: folderName }) => {
                    try {
                        fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR + 'resolvers/' + folderName)).forEach((file) => {
                            const name = file.split(/(.vue)$|(.js)$|(.ts)$/)[0].toLowerCase();

                            if (name === 'index') {
                                const input = process.env.INPUT_DIR + 'resolvers/' + folderName + '/' + file;
                                const output = process.env.OUTPUT_DIR + 'resolvers/' + folderName + '/index';

                                ENTRY.format.es({ input, output });
                            }
                        });
                    } catch (error) {
                        console.warn(`Warning: Cannot read resolver directory ${folderName}:`, error.message);
                    }
                });
        }
    } catch (error) {
        console.warn('Warning: Cannot read resolvers directory:', error.message);
    }
}

// 添加 useForm 构建
function addUseForm() {
    try {
        const useFormPath = path.resolve(__dirname, process.env.INPUT_DIR + 'useform/index.js');
        if (fs.existsSync(useFormPath)) {
            ENTRY.format.es({
                input: process.env.INPUT_DIR + 'useform/index.js',
                output: process.env.OUTPUT_DIR + 'useform/index'
            });
        }
    } catch (error) {
        console.warn('Warning: Cannot find useform directory:', error.message);
    }
}

// 执行构建配置
function build() {
    addLibrary();
    addComponents();
    addStyles();
    addResolvers();
    addUseForm();

    return ENTRY.entries;
}

export default defineConfig(build());
