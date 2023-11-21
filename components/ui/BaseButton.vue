<template>
    <div class="base-button">
        <button class="base-button__button"
            :class="{
                'base-button__button--green': theme === 'green',
                'base-button__button--long': fullWidth
            }"
            :type="type || 'button'">
            {{ text }}
        </button>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
    text: {
        type: String,
        required: true
    },
    type: {
        type: String as PropType<"button" | "submit" | "reset">,
        required: false
    },
    theme: {
        type: String as PropType<"green">,
        required: false
    },
    fullWidth: {
        type: Boolean,
        required: false
    }
})
</script>

<style lang="scss" scoped>
.base-button {
    &__button {
        font-size: $font-size-small;
        font-weight: $font-weight-bold;
        line-height: $line-height-medium;

        padding: 18px;

        border-radius: $border-radius-mini;
        background-color: transparent;
        color: $peach-cream;

        @media #{$screen-tablet} {
            font-size: $font-size-big;

            padding: 24px;

            border-radius: $border-radius-normal;
        }

        &--long {
            width: 100%;
        }

        &--green {
            background-color: $color-accent;
        }
    }
}
</style>