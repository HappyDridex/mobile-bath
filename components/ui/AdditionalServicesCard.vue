<template>
    <div class="additional-services-card">
        <figure class="additional-services-card__description">
            <div class="additional-services-card__image">
                <img class="additional-services-card__image-pic"
                    :src="card.imgSrc"
                    alt="Фото дополнительной услуги">
            </div>
            <figcaption class="additional-services-card__textcontent">
                <h3 class="additional-services-card__title">{{ card.title }}</h3>
                <p class="additional-services-card__text">{{ card.text }}</p>
            </figcaption>
        </figure>
        <span class="additional-services-card__price">{{ card.price }}</span>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';


defineProps({
    card: {
        type: Object as PropType<IServicesCard>,
        required: true
    }
})

interface IServicesCard {
    title: string,
    text: string,
    price: string,
    imgSrc: string
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_mixins.scss";

.additional-services-card {
    @include flex-space-between;

    gap: 16px;

    &__description {
        display: flex;
        align-items: center;
    }

    &__image {
        $width-image-mobile: 92px;
        $width-image-tablet: 200px;

        flex-shrink: 0;

        width: $width-image-mobile;

        @media #{$screen-tablet} {
            width: $width-image-tablet;
        }

        &-pic {
            @include object-cover-full;
        }
    }

    &__textcontent {
        line-height: $line-height-medium;

        margin-left: 6px;

        color: $color-primary-light;

        @media #{$screen-tablet} {
            margin-left: 16px;
        }
    }

    &__title {
        @include text-normal;
        font-weight: $font-weight-bold;
    }

    &__text {
        font-size: $font-size-micro;

        margin-top: 2px;

        @media #{$screen-tablet} {
            font-size: $font-size-normal;

            margin-top: 4px;
        }
    }

    &__price {
        @include text-normal;
        font-weight: $font-weight-bold;

        @include flex-all-center;

        width: 108px;
        padding: 4px;

        white-space: nowrap;

        border-radius: $border-radius-minimal;
        background-color: $color-accent;

        @media #{$screen-tablet} {
            width: 164px;
            padding: 8px;

            border-radius: $border-radius-mini;
        }
    }
}
</style>