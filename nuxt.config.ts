export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: ` 
                    @import "@/assets/css/_variables.scss";
                    @import "@/assets/css/_mixins.scss";`,
                },
            },
        },
    },
    modules: [
        'nuxt-swiper',
        [
            'yandex-metrika-module-nuxt3',
            {
                id: '95831255',
                webvisor: true,
                consoleLog: false,
            },
        ],
    ],
    runtimeConfig: {
        public: {
            TELEGRAM_API_KEY: '6956294615:AAEw4tn5ObdMFj3Ici64RCHparINlPg_rnQ',
        },
    },
    css: ['@/assets/css/_main.scss'],
    postcss: {
        plugins: {
            autoprefixer: {},
            cssnano: {},
        },
    },
});
