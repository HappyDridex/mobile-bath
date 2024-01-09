<template>
    <section class="booking-date container">
        <h2 class="booking-date__title additional-services__title about-bath__title title title--huge">Бронирование</h2>
        <div class="booking-date__content">
            <div class="booking-date__datepicker datepicker">
                <VueDatePicker ref="datepicker"
                    v-model="dates"
                    range
                    inline
                    auto-apply
                    :flow="flow"
                    :clearable="false"
                    :hide-navigation="['time']"
                    :locale="'ru'"
                    hide-offset-dates
                    :disabled-dates="disableDates"
                    :highlight="highlightDates"
                    month-name-format="long"
                    :year-range="[+new Date().getFullYear(), +new Date().getFullYear() + 1]"
                    @update:model-value="onDateSelect" />

                <p class="booking-date__discount-days">*Скидочные дни</p>
            </div>

            <form class="booking-date__form form"
                @submit.prevent="onSubmit">
                <fieldset class="form__fieldset">
                    <UiInputField class="form__field"
                        :current-val="form.name"
                        :placeholder="'Имя'"
                        @value-changed="(val: string) => form.name = val" />

                    <UiInputField class="form__field"
                        :current-val="form.phone"
                        :placeholder="'Телефон'"
                        tel-format
                        :type="'tel'"
                        @value-changed="(val: string) => form.phone = val" />

                    <UiInputField class="form__field"
                        :current-val="form.address"
                        :placeholder="'Адрес получения'"
                        @value-changed="(val: string) => form.address = val" />
                </fieldset>

                <fieldset class="form__fieldset">
                    <UiInputField class="form__field"
                        disabled
                        :current-val="format(form.date_receive, 'dd.MM.yyyy')"
                        :placeholder="'Дата получения'" />

                    <UiInputField class="form__field"
                        disabled
                        :current-val="format(form.date_return, 'dd.MM.yyyy')"
                        :placeholder="'Дата возврата'" />

                    <UiBaseButton class="form__field"
                        :text="'Забронировать'"
                        :theme="'green'"
                        :type="'submit'"
                        full-width
                        :disabled="!requiredFieldsAreFilled" />
                </fieldset>
            </form>

        </div>
        <Teleport to="body">
            <Transition name="slide-from-right">
                <UiNotificationPopUp v-if="showPopup"
                    class="booking-date__popup"
                    :title="popup.title"
                    :text="popup.text"
                    :success="popup.success" />
            </Transition>
        </Teleport>
    </section>
</template>

<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import { format } from 'date-fns'
import { fieldsAreFilled } from "@/utils/validation";

const telegram = useTelegram();
const api = useApi();

const bathId = '1';
const buzyDays = await api.getBuzyDays();

const flow: ('calendar' | 'month' | 'year')[] = ['calendar', 'month', 'year'];

const today = new Date()
const tomorrow = new Date(new Date().setDate(today.getDate() + 1))
const yesterday = new Date(new Date().setDate(today.getDate() - 1))

const datepicker = ref<any>(null);
const dates = ref<Date[]>([today, tomorrow]);

const disableDates = (date: Date) => {
    return date < yesterday
};

const highlightDates = (date: any) => {
    if (date instanceof Date) {
        const dateObj = new Date(date);
        const dateString = format(dateObj, 'dd.MM.yyyy')
        if (buzyDays?.[bathId]?.includes(dateString)) {
            return true
        }
    }
    return false
};

const showPopup = ref(false)

const successPopup = {
    title: "Ваша Баня успешно забронирована",
    text: "Мы перезвоним Вам для подтверждения бронирования",
    success: true
}

const errorPopup = {
    title: "Произошла ошибка",
    text: "Повторите позднее...",
    success: false
};

const popup = reactive<typeof successPopup>(successPopup);


const formInit = {
    name: "",
    phone: "",
    address: "",
    date_receive: dates.value[0],
    date_return: dates.value[1]
};

const form = reactive({ ...formInit });

const formKeysTranslation: Record<string, keyof typeof form> = {
    Имя: 'name',
    Телефон: 'phone',
    "Адрес получения": 'address',
    "Дата получения": 'date_receive',
    "Дата возврата": 'date_return',
};

const requiredFieldsAreFilled = computed(() => {
    const { date_receive, date_return, ...fields } = form
    return fieldsAreFilled(...Object.values(fields))
});

const nomalizedForm = computed(() => {
    const { date_receive, date_return, ...fields } = form
    return { ...fields, date_receive: format(form.date_receive, 'dd.MM.yyyy'), date_return: format(form.date_return, 'dd.MM.yyyy') }
});

function onDateSelect(newDates: Date[]) {
    datepicker.value.switchView('calendar')
    form.date_receive = newDates[0]
    form.date_return = newDates[1]
};

async function onSubmit() {
    const res = await telegram.sendForm(nomalizedForm.value, formKeysTranslation)
    Object.assign(form, formInit)

    Object.assign(popup, res === true ? successPopup : errorPopup)

    showPopup.value = true
    setTimeout(() => {
        showPopup.value = false
    }, 4000)
}


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

    &__datepicker {
        width: 100%;
    }

    &__discount-days {
        font-size: 14px;
        font-weight: $font-weight-bold;

        margin-top: 12px;

        color: $golden-grass;

        @media #{$screen-tablet} {
            font-size: 20px;

            margin-top: 20px;
        }
    }

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

    &__popup {
        position: fixed;
        top: 0;
        right: 0;
        z-index: $booking-popup-z;
    }
}
</style>