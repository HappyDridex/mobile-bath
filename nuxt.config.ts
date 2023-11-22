export default defineNuxtConfig({
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
    modules: ['nuxt-swiper'],
});
