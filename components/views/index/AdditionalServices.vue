<template>
    <section class="additional-services container">
        <h2 class="additional-services__title about-bath__title title title--huge">Дополнительные услуги</h2>
        <ul class="additional-services__list">
            <li class="additional-services__item"
                v-for="card in cards"
                :key="card.title">
                <UiAdditionalServicesCard :card="card" />
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import cardPhoto1 from "/images/services-card-photo-1.png";
import cardPhoto2 from "/images/services-card-photo-2.png";
import cardPhoto3 from "/images/services-card-photo-3.png";
import cardPhoto4 from "/images/services-card-photo-4.png";

const cards = [
    { title: "Банные веники", text: "Отборный кавказкий дуб", price: "400₽/шт", imgSrc: cardPhoto1 },
    { title: "Дрова", text: "Одна порция (2-3 часа парения, не считая растопки)", price: "500₽/шт", imgSrc: cardPhoto2 },
    { title: "Услуги банщика (истопника)", text: "От 2-х часов", price: "2500₽/час", imgSrc: cardPhoto3 },
    { title: "Аренда купели", text: "Отборный кавказкий дуб", price: "3500₽/сут.", imgSrc: cardPhoto4 }
]

</script>

<style lang="scss" scoped>
.additional-services {
    $gap-mobile: 16px;
    $gap-tablet: 24px;
    $gap-row-desktop: 40px;
    $gap-col-desktop: 52px;

    &__title {
        margin-bottom: 24px;

        @media #{$screen-tablet} {
            margin-bottom: 32px;
        }

        @media #{$screen-desktop} {
            margin-bottom: 40px;
        }
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: $gap-mobile;

        @media #{$screen-desktop} {
            gap: $gap-tablet;
        }

        @media #{$screen-desktop} {
            flex-direction: row;
            flex-wrap: wrap;
            gap: $gap-row-desktop $gap-col-desktop;
        }
    }

    &__item {
        @media #{$screen-tablet} {
            flex: 0 0 calc(50% - #{$gap-col-desktop} / 2);
        }
    }
}
</style>