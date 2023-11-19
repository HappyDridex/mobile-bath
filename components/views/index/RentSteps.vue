<template>
    <section class="rent-steps container">
        <div class="rent-steps__content">
            <h2 class="rent-steps__title title title--huge">Этапы аренды</h2>
            <UiStepsListWithProgress :steps="steps" />
        </div>
        <div class="rent-steps__photo">
            <img class="rent-steps__photo-pic"
                src="/images/rent-steps-photo.png"
                alt="Фото бани">
        </div>
    </section>
</template>

<script setup lang="ts">
const steps = [
    {
        title: "Бронирование",
        description: "Выбор даты и времени, ознакомление с договором, внесение депозита",
        isActive: true
    },
    {
        title: "Доставка и монтаж",
        description: "Подписание договора, внесение полной оплаты, монтаж бани и инструктаж по эксплуатации",
        isActive: true
    },
    {
        title: "Эксплуатация",
        description: "Наслаждение прекрасной баней",
        isActive: false
    },
    {
        title: "Демонтаж бани",
        description: "Демонтаж бани, возвращение депозита",
        isActive: false
    },
]
</script>

<style lang="scss" scoped>
@import "@/assets/css/_mixins.scss";

.rent-steps {
    @include flex-col-center(24px);

    @media #{$screen-tablet} {
        flex-direction: row;
        align-items: flex-start;
        gap: 32px;
    }

    &__content {
        width: 100%;

        @media #{$screen-tablet} {
            flex: 0 0 50%;
        }
    }

    &__title {
        margin-bottom: 24px;

        @media #{$screen-tablet} {
            margin-bottom: 32px;
        }

        @media #{$screen-desktop} {
            margin-bottom: 40px;
        }
    }

    &__list {}


    &__photo {
        overflow: hidden;
        border-radius: $border-radius-small;

        @media #{$screen-tablet} {
            border-radius: $border-radius-medium
        }


        &-pic {
            @include object-cover-full;

            aspect-ratio: 1.2 / 1;

            @media #{$screen-tablet} {
                aspect-ratio: 1 / 1;
            }
        }
    }
}
</style>