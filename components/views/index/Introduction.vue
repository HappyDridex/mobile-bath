<template>
    <section class="introduction container">
        <div class="introduction__grid">
            <div class="introduction__grid-item introduction__grid-pic-1">
                <img src="/images/bath-photo-1.png"
                    alt="Фото бани">
            </div>
            <div class="introduction__grid-item introduction__grid-pic-2">
                <img src="/images/bath-photo-1.png"
                    alt="Фото бани">
            </div>
            <div class="introduction__grid-item introduction__grid-pic-3">
                <img src="/images/bath-photo-1.png"
                    alt="Фото бани">
            </div>
            <div class="introduction__grid-item introduction__grid-booking">
                <button>BOOK</button>
            </div>
            <div class="introduction__grid-item introduction__grid-title">
                <h1 class="title title--xxl">АРЕНДА <br> БАНИ-БОЧКИ</h1>
            </div>
            <div class="introduction__grid-item introduction__grid-pic-4">
                <img src="/images/bath-photo-1.png"
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
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "pic1 pic1"
            "pic2 pic3"
            "pic2 booking"
            "title title"
            "pic4 pic4"
        ;


        &-item {
            width: 100%;
            height: 100%;
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
            grid-area: booking;
        }

        &-title {
            grid-area: title;
        }
    }
}
</style>