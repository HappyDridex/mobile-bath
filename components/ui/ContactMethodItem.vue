<template>
    <div class="contact-method-item">
        <a class="contact-method-item__link"
            :href="href">
            <span class="contact-method-item__icon">
                <span class="contact-method-item__icon-pic">
                    <slot />
                </span>
            </span>
            <span class="contact-method-item__text">
                {{ text }}
            </span>
        </a>
    </div>
</template>

<script setup lang="ts">

defineProps({
    text: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    }
})

</script>

<style lang="scss" scoped>
@import "@/assets/css/_mixins.scss";

.contact-method-item {
    &__link {
        display: flex;
        align-items: center;
        gap: 4px;

        @media #{$screen-tablet} {
            gap: 8px;
        }
    }

    &__icon {
        $size-mobile: 28px;
        $size-tablet: 48px;

        @include flex-all-center;

        width: $size-mobile;
        height: $size-mobile;

        border-radius: $border-radius-micro;
        background-color: $color-primary-light;

        @media #{$screen-tablet} {
            width: $size-tablet;
            height: $size-tablet;

            border-radius: $border-radius-mini;
        }

        &-pic {
            $icon-size-mobile: 16px;
            $icon-size-tablet: 28px;

            width: $icon-size-mobile;
            height: $icon-size-mobile;

            color: $color-primary-dark;

            @media #{$screen-tablet} {
                width: $icon-size-tablet;
                height: $icon-size-tablet;
            }
        }


    }

    &__text {}
}
</style>