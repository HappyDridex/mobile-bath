<template>
    <div class="input-field">
        <input class="input-field__control"
            :type="type || 'text'"
            :placeholder="placeholder"
            v-model="value"
            :disabled="disabled"
            @input="onInput">
    </div>
</template>

<script setup lang="ts">
import { returnOnlyNumbers, returnTelFomat } from '@/utils/validation';

const emit = defineEmits(["value-changed"])

const props = defineProps({
    currentVal: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: false
    },
    disabled: {
        type: Boolean,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    onlyNumbers: {
        type: Boolean,
        required: false
    },
    telFormat: {
        type: Boolean,
        required: false
    }
})

const value = ref("")


function onInput(evt: Event) {
    if (!evt?.target) {
        return
    }
    let inputText = (evt.target as HTMLInputElement).value;

    if (props.onlyNumbers) {
        inputText = returnOnlyNumbers(value.value);
    } else if (props.telFormat) {
        inputText = returnTelFomat(value.value);
    } else {
        emit("value-changed", inputText);
        return
    }
    value.value = inputText;
    emit("value-changed", inputText);
}

watchEffect(() => {
    value.value = props.currentVal
})

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