<template>
    <main class="index-page">
        <ViewsIndexIntroduction class="index-page__section" />
        <LazyViewsIndexWhyBath class="index-page__section" />
        <LazyViewsIndexAboutBath class="index-page__section" />
    </main>
</template>

<script setup>

definePageMeta({ layout: "default" });
</script>

<style lang="scss" scoped>
@import "@/assets/css/_mixins.scss";

.index-page {
    &__section {
        @include reset-vertical-identation-of-first;

        margin-top: 64px;
    }
}
</style>