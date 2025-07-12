import Aura from '@primeuix/themes/aura';
import { resolve } from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    modules: ['@primevue/nuxt-module'],
    primevue: {
        usePrimeVue: true,
        autoImport: true,
        options: {
            ripple: true,
            theme: {
                preset: Aura
            }
        }
    },
    alias: {
        'primevuekit': resolve(__dirname, '../../packages/primevuekit/src'),
        'primevuekit/inputdatemask': resolve(__dirname, '../../packages/primevuekit/src/inputdatemask')
    }
})
