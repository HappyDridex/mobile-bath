<template>
    <main class="index-page">
        <ViewsIndexIntroduction class="index-page__section" />
        <LazyViewsIndexWhyBath class="index-page__section" />
        <LazyViewsIndexAboutBath class="index-page__section" />
        <LazyViewsIndexBookingDate class="index-page__section" />
        <LazyViewsIndexRentConditions class="index-page__section" />
        <LazyViewsIndexRentSteps class="index-page__section" />
        <LazyViewsIndexAdditionalServices class="index-page__section" />
        <ViewsIndexContacts class="index-page__section" />
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

        @media #{$screen-tablet} {
            margin-top: 80px;
        }

        @media #{$screen-desktop} {
            margin-top: 140px;
        }
    }
}
</style>