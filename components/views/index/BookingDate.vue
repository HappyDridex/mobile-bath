<template>
    <section class="booking-date container">
        <h2 class="booking-date__title additional-services__title about-bath__title title title--huge">Бронирование</h2>
        <div class="booking-date__content">
            <div class="booking-date__datepicker datepicker">
                <VueDatePicker v-model="date"
                    range
                    inline
                    auto-apply
                    :flow="flow"
                    vertical
                    :clearable="false"
                    :hide-navigation="['time']"
                    :locale="'ru'"
                    hide-offset-dates
                    :disabled-dates="disableDates"
                    :highlight="highlighteDates"
                    :month-change-on-scroll="false"
                    :year-range="[+new Date().getFullYear(), +new Date().getFullYear() + 1]"
                    @update:model-value="() => { }" />
            </div>

            <form class="booking-date__form form"
                @submit.prevent>
                <fieldset class="booking-date__fieldset">
                    <UiInputField class="form__field"
                        :current-val="form.name"
                        :placeholder="'Имя'"
                        @value-changed="(val: string) => form.name = val" />

                    <UiInputField class="form__field"
                        :current-val="form.phone"
                        :placeholder="'Телефон'"
                        @value-changed="(val: string) => form.phone = val" />

                    <UiInputField class="form__field"
                        :current-val="form.address"
                        :placeholder="'Адрес получения'"
                        @value-changed="(val: string) => form.address = val" />
                </fieldset>

                <fieldset class="booking-date__fieldset">
                    <UiInputField class="form__field"
                        :current-val="form.date_receive"
                        :placeholder="'Дата получения'"
                        @value-changed="(val: string) => form.date_receive = val" />

                    <UiInputField class="form__field"
                        :current-val="form.date_return"
                        :placeholder="'Дата возврата'"
                        @value-changed="(val: string) => form.date_return = val" />

                    <UiBaseButton class="form__field"
                        :text="'Забронировать'"
                        :theme="'green'"
                        full-width />
                </fieldset>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">

import VueDatePicker from '@vuepic/vue-datepicker';

const flow: ('calendar' | 'month' | 'year')[] = ['calendar', 'month', 'year'];
const today = new Date()
const tomorrow = new Date(new Date().setDate(today.getDate() + 1))
const yesterday = new Date(new Date().setDate(today.getDate() - 1))

const date = ref<Date[]>([today, tomorrow]);

const disableDates = (date: Date) => {
    return date < yesterday
}

// if we need highlights
const highlighteDates = (date: any) => {
    return false
}

const form = reactive({
    name: "",
    phone: "",
    address: "",
    placement: "",
    date_receive: "",
    date_return: ""
})

</script>

<style scoped lang="scss">
.booking-date {

    &__title {
        margin-bottom: 24px;

        @media #{$screen-tablet} {
            margin-bottom: 32px;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 24px;

        @media #{$screen-tablet} {
            gap: 32px;
        }

        @media #{$screen-desktop} {
            flex-direction: row;
            gap: 24px;
        }
    }

    &__datepicker {}

    &__form {
        width: 100%;
        height: fit-content;

        @media #{$screen-desktop} {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 16px;
        }

        @media #{$screen-desktop} {
            column-gap: 24px;
        }
    }
}
</style>