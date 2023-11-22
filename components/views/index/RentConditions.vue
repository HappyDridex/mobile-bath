<template>
    <section class="rent-conditions container">
        <h2 class="rent-conditions__title title title--huge">Условия аренды</h2>
        <div class="rent-conditions__content">
            <ul class="rent-conditions__list">
                <li class="rent-conditions__item"
                    v-for="card in cards"
                    :key="card.title">
                    <UiRentConditionCard :card="card" />
                </li>
            </ul>
            <div class="rent-conditions__photo">
                <img class="rent-conditions__photo-pic"
                    src="/images/rent-conditions-photo.png"
                    alt="Фото бани">
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const cards = [
    {
        title: "Аренда в сутки",
        price: "12 000₽",
        description: "Доставка осуществляется в течение 2-3 часов. Возможна долгосрочная аренда."
    },
    {
        title: "Доставка до 50 км от МКАД ",
        price: "3 000₽",
        description: "Свыше 50 км от МКАД - 100 ₽/км"
    },
    {
        title: "Депозит",
        price: "5 000₽",
        description: "Возвращается после окончания срока аренды, в случае отказа менее чем за 3 дня до обговариваемой даты , предоплата не возвращается."
    }
]
</script>

<style lang="scss" scoped>
.rent-conditions {
    &__title {
        margin-bottom: 24px;

        @media #{$screen-tablet} {
            margin-bottom: 32px;
        }

        @media #{$screen-desktop} {
            margin-bottom: 40px;
        }
    }

    &__content {
        @include flex-col-center(24px);

        @media #{$screen-tablet} {
            gap: 32px;
        }

        @media #{$screen-desktop} {
            flex-direction: row;
            gap: 66px;
        }
    }

    &__list {
        @media #{$screen-desktop} {
            max-width: 636px;
        }
    }

    &__item {
        @include reset-vertical-identation-of-first;

        margin-top: 16px;

        @media #{$screen-desktop} {
            margin-top: 24px;
        }
    }

    &__photo {
        overflow: hidden;

        max-width: 528px;

        border-radius: $border-radius-small;

        @media #{$screen-tablet} {
            border-radius: $border-radius-big;
        }

        &-pic {
            @include object-cover-full;

            aspect-ratio: 1 / 1;
        }
    }
}
</style>