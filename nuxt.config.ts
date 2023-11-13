// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/css/_variables.scss" as *;',
                },
            },
        },
    },
    css: ["@/assets/css/_main.scss"],
    postcss: {
        plugins: {
            autoprefixer: {},
            cssnano: {},
        },
    },
});
