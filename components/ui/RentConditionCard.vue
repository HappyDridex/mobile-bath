<template>
    <div class="rent-condition-card">
        <header class="rent-condition-card__header">
            <h3 class="rent-condition-card__title">{{ card.title }}</h3>
            <span class="rent-condition-card__price">{{ card.price }}</span>
        </header>
        <p class="rent-condition-card__description">
            {{ card.description }}
        </p>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
    card: {
        type: Object as PropType<IConditionCard>,
        required: true
    }
})

interface IConditionCard {
    title: string,
    price: string,
    description: string
}

</script>

<style lang="scss" scoped>
@import "@/assets/css/_mixins.scss";

.rent-condition-card {
    height: 100px;
    padding: 12px;

    border-radius: $border-radius-small;
    background-color: $color-primary-light;

    @media #{$screen-tablet} {
        height: 156px;
        padding: 24px;

        border-radius: $border-radius-medium;
    }

    &__header {
        @include flex-space-between;
    }

    &__title,
    &__price {
        font-size: $font-size-normal;
        font-weight: $font-weight-bold;
        line-height: $line-height-medium;

        @media #{$screen-tablet} {
            font-size: $font-size-large;
        }
    }

    &__title {
        @include text-ellipsis;

        margin-right: 4px;

        color: $color-primary-dark;

        @media #{$screen-tablet} {
            margin-right: 12px;
        }
    }

    &__price {
        white-space: nowrap;

        display: inline-block;

        padding: 4px 6px;

        border-radius: $border-radius-minimal;
        color: $color-primary-light;
        background-color: $color-accent;

        @media #{$screen-tablet} {
            padding: 8px 10px;

            border-radius: $border-radius-mini;
        }
    }

    &__description {
        @include line-clamp(3);

        font-size: $font-size-micro;
        line-height: $line-height-medium;

        margin-top: 6px;

        color: $color-primary-dark;

        @media #{$screen-tablet} {
            font-size: $font-size-normal;

            margin-top: 12px;
        }
    }

}
</style>