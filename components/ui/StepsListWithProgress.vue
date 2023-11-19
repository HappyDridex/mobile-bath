<template>
    <div class="steps-list-with-progress">
        <ul class="steps-list-with-progress__list">
            <li class="steps-list-with-progress__item"
                :class="{ 'steps-list-with-progress__item--active': step.isActive }"
                v-for="step in steps"
                :key="step.title">
                <h3 class="steps-list-with-progress__item-title">{{ step.title }}</h3>
                <p class="steps-list-with-progress__item-text">{{ step.description }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';


defineProps({
    steps: {
        type: Object as PropType<IStepsList[]>,
        required: true
    }
})

interface IStepsList {
    title: string,
    description: string,
    isActive: boolean
}

</script>

<style lang="scss" scoped>
@import "@/assets/css/_mixins.scss";

.steps-list-with-progress {
    $mobile-left-padding: 24px;
    $tablet-left-padding: 40px;

    $marker-size-mobile: 12px;
    $marker-size-tablet: 16px;

    $progress-y-offset-mobile: 40px;
    $progress-y-offset-tablet: 52px;


    &__list {
        padding-left: $mobile-left-padding;

        @media #{$screen-tablet} {
            padding-left: $tablet-left-padding;
        }
    }

    &__item {
        position: relative;

        &:not(:last-child) {
            padding-bottom: 44px;
        }

        &:last-child::before {
            content: none;
        }

        &:last-child::before {
            content: none;
        }

        // кружок
        &::after {
            position: absolute;
            top: -$marker-size-mobile;
            left: -$mobile-left-padding;

            width: $marker-size-mobile;
            height: $marker-size-mobile;

            border-radius: 50%;
            border: 3px solid $color-primary-light;

            content: "";

            @media #{$screen-tablet} {
                top: -$marker-size-tablet;
                left: -$tablet-left-padding;

                width: $marker-size-tablet;
                height: $marker-size-tablet;

                border-width: 4px;
            }
        }

        // линия
        &::before {
            position: absolute;
            top: 0;
            left: calc(-#{$mobile-left-padding} + #{$marker-size-mobile} / 2);

            width: 2px;
            height: calc(100% - $marker-size-mobile);

            transform: translate(-50%, $progress-y-offset-mobile);

            background-color: $color-primary-light;

            content: "";

            @media #{$screen-tablet} {
                left: calc(-#{$tablet-left-padding} + #{$marker-size-tablet} / 2);

                width: 3px;
                height: calc(100% - $marker-size-tablet);

                transform: translate(-50%, $progress-y-offset-tablet);
            }
        }

        &::after {
            transform: translateY($progress-y-offset-mobile);

            @media #{$screen-tablet} {
                transform: translateY($progress-y-offset-tablet);
            }
        }

        &--active {

            // кружок
            &::after {
                border-color: $color-accent;
            }

            // линия
            &::before {
                background-color: $color-accent;
            }
        }

        &-title {
            @include text-normal;

            line-height: $line-height-medium;
            font-weight: $font-weight-bold;
        }

        &-text {
            font-size: $font-size-micro;
            line-height: $line-height-medium;

            position: relative;

            margin-top: 6px;

            @media #{$screen-tablet} {
                font-size: $font-size-normal;
            }
        }
    }
}
</style>