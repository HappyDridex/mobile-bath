<template>
    <section class="introduction container">
        <div class="introduction__grid">
            <div class="introduction__grid-item introduction__grid-pic-1">
                <img src="/images/bath-photo-1.png"
                    alt="Фото бани">
            </div>
            <div class="introduction__grid-item introduction__grid-pic-2">
                <img src="/images/bath-photo-2-plug.png"
                    alt="Фото бани">
            </div>
            <div class="introduction__grid-item introduction__grid-pic-3">
                <img src="/images/bath-photo-3.png"
                    alt="Фото бани">
            </div>
            <div class="introduction__grid-item introduction__grid-booking">
                <UiButtonBook />
            </div>
            <div class="introduction__grid-item introduction__grid-title">
                <h1 class="title title--xxl">АРЕНДА <br class="introduction__grid-title-br">БАНИ-БОЧКИ</h1>
            </div>
            <div class="introduction__grid-item introduction__grid-pic-4">
                <img src="/images/bath-photo-4-plug.png"
                    alt="Фото бани">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "@/assets/css/_mixins.scss";

.introduction {

    &__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 216px 134px 90px 184px 180px;
        grid-template-areas:
            "pic1 pic1"
            "pic2 pic3"
            "pic2 booking"
            "title title"
            "pic4 pic4"
        ;
        gap: 12px;

        @media #{$screen-tablet} {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 388px 280px 146px 130px;
            grid-template-areas:
                "pic1 pic1 pic2"
                "title title title"
                "pic3 pic3 booking"
                "pic3 pic3 pic4"
            ;
            gap: 16px;
        }

        @media #{$screen-desktop} {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 284px 146px 180px;
            grid-template-areas:
                "pic1 pic1 pic2 pic3"
                "pic1 pic1 pic2 booking"
                "title title  title pic4"
            ;
            gap: 24px;
        }

        &-item {
            overflow: hidden;
            border-radius: $border-radius-small;

            @media #{$screen-tablet} {
                border-radius: $border-radius-medium;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &-pic-1 {
            grid-area: pic1;
        }

        &-pic-2 {
            grid-area: pic2;
        }

        &-pic-3 {
            grid-area: pic3;
        }

        &-pic-4 {
            grid-area: pic4;
        }

        &-booking {
            @include flex-all-center;

            grid-area: booking;
        }

        &-title {
            grid-area: title;

            &-br {
                @media #{$screen-desktop} {
                    display: none;
                }
            }
        }
    }
}
</style>