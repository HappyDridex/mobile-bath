<template>
    <div class="input-field">
        <input class="input-field__control"
            :type="type || 'text'"
            :placeholder="placeholder"
            v-model="value"
            @input="onInput">
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["value-changed"])

defineProps({
    currentVal: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    }
})

const value = ref("")

function onInput() {
    emit("value-changed", value.value)
}

</script>


<style lang="scss" scoped>
.input-field {
    &__control {
        font-size: $font-size-small;
        line-height: $line-height-medium;

        width: 100%;
        padding: 18px 16px;

        border-radius: $border-radius-mini;
        border: 1px solid $color-primary-light;
        background-color: transparent;
        color: $color-primary-light;

        @media #{$screen-tablet} {
            font-size: $font-size-big;

            padding: 28px 24px;

            border-radius: $border-radius-normal;
            border-width: 1.5px;
        }

        &::placeholder {
            color: $dusty-gray;
        }
    }
}
</style>