<template>
    <main class="index-page">
        <ViewsIndexIntroduction class="index-page__section"
            @book-button-clicked="scrollToBooking" />
        <LazyViewsIndexWhyBath class="index-page__section"
            @book-button-clicked="scrollToBooking" />
        <LazyViewsIndexAboutBath class="index-page__section" />
        <ViewsIndexBookingDate class="index-page__section"
            ref="bookingDateRef" />
        <LazyViewsIndexRentConditions class="index-page__section" />
        <LazyViewsIndexRentSteps class="index-page__section" />
        <LazyViewsIndexAdditionalServices class="index-page__section" />
        <ViewsIndexContacts class="index-page__section" />
    </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: "default" });

useHead({
    title: "Аренда бани бочки",
    meta: [
        {
            name: "description",
            content: "Баня на прицепе из натуральной древесины с дровяной печью и полностью готовая к использованию. Заказать удобно, привезем быстро!"
        },
        {
            name: "keywords",
            content: "автобаня на колесах, аренда бани, аренда бани бочки, баня бочка, аренда бани бочки на прицепе, аренда бани на колесах, баня аренда, баня бочка аренда, баня бочка снять, баня на колёсах, выездная баня на колесах, снять баню на колесах"
        }
    ]
})

const bookingDateRef = ref<any>(null);

function scrollToBooking() {
    if (bookingDateRef.value) {
        bookingDateRef.value.$el.scrollIntoView({
            behavior: "smooth"
        })
    }
}

</script>

<style lang="scss" scoped>
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