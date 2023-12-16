<template>
    <div class="notification-pop-up">
        <div class="notification-pop-up__inner">
            <div class="notification-pop-up__icon"
                :class="{
                    'notification-pop-up__icon--success': success,
                    'notification-pop-up__icon--error': !success
                }">
                <SvgIcon class="notification-pop-up__icon-pic"
                    name="arrow-left-top" />
            </div>
            <div class="notification-pop-up__content">
                <h3 class="notification-pop-up__title">
                    {{ title }}
                </h3>
                <p class="notification-pop-up__text">
                    {{ text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    success: {
        type: Boolean,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.notification-pop-up {
    &__inner {
        display: flex;
        align-items: center;

        max-width: 417px;
        padding: 18px 12px;

        border-radius: $border-radius-normal;
        background-color: $color-primary-light;

        @media #{$screen-tablet} {
            padding: 24px 16px;

            border-radius: $border-radius-big;
        }
    }

    &__icon {
        padding: 12px;

        border-radius: $border-radius-small;
        color: $color-primary-light;
        box-shadow: $box-shadow-small;

        @media #{$screen-tablet} {
            padding: 15px;
        }

        &--success {
            background-color: $color-accent;
        }

        &--error {
            background-color: $monza;
        }

        &-pic {
            width: 32px;
            height: 32px;

            @media #{$screen-tablet} {
                width: 38px;
                height: 38px;
            }
        }
    }

    &__content {
        margin-left: 8px;

        @media #{$screen-tablet} {
            margin-left: 12px;
        }
    }

    &__title,
    &__text {
        font-size: $font-size-small;
        line-height: $line-height-medium;
        letter-spacing: -0.4px;

        color: $color-primary-dark;

        @media #{$screen-tablet} {
            font-size: $font-size-normal;
        }
    }

    &__title {
        @include text-ellipsis;

        font-weight: $font-weight-bold;
    }

}
</style>