<template>
    <section class="why-bath container">
        <div class="why-bath__textcontent">
            <h2 class="why-bath__title title title--huge">ПОЧЕМУ БАНЯ-БОЧКА</h2>
            <p class="why-bath__description">Это настоящая парная из натуральной древесины.
                В бане стоит печь, которая дает мягкий пар с возможностью нагрева воды. Качественная теплоизоляция и деревянные стенки бочки создают внутри комфортный микроклимат.
                Баня доставляется на прицепе и проходит тщательную санитарную обработку.
                Haслaждaйтеcь прямo у вaс на участке, нa рыбалкe или пpосто нa бeрегу oзеpа.
            </p>
            <UiButtonBook class="why-bath__book-button" />
        </div>
        <ul class="why-bath__gallery">
            <li class="why-bath__gallery-item">
                <UiPhotoCardWithCaption :image-src="cardImage1"
                    :caption="'Приедет куда угодно'" />
            </li>
            <li class="why-bath__gallery-item">
                <UiPhotoCardWithCaption :image-src="cardImage2"
                    :caption="'Разогреется за 30 минут'" />
            </li>
            <li class="why-bath__gallery-item">
                <UiPhotoCardWithCaption :image-src="cardImage3"
                    :caption="'Комфортный микроклимат'" />
            </li>
            <li class="why-bath__gallery-item">
                <UiPhotoCardWithCaption :image-src="cardImage4"
                    :caption="'Современный дизайн'" />
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import cardImage1 from "/images/benefit-card-photo-1.png"
import cardImage2 from "/images/benefit-card-photo-2.png"
import cardImage3 from "/images/benefit-card-photo-3.png"
import cardImage4 from "/images/benefit-card-photo-4.png"

</script>

<style lang="scss" scoped>
.why-bath {
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

    &__textcontent {
        @media #{$screen-desktop} {
            flex-basis: 50%;
        }
    }

    &__title {}

    &__description {
        @include text-small;
        line-height: $line-height-medium;
    }

    &__book-button {
        margin-top: 24px;

        @media #{$screen-tablet} {
            margin-top: 16px;
        }

        @media #{$screen-desktop} {
            margin-top: 24px;
        }
    }

    &__gallery {
        $gap-mobile: 12px;
        $gap-tablet: 16px;
        $gap-desktop: 24px;

        display: flex;
        flex-wrap: wrap;
        gap: $gap-mobile;

        @media #{$screen-desktop} {
            flex-basis: 50%;
        }

        &-item {
            flex: 0 0 calc(50% - $gap-mobile);
            aspect-ratio: 1 / 1;
        }
    }
}
</style>