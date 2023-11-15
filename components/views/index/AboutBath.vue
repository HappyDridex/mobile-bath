<template>
    <section class="about-bath">
        <h2 class="about-bath__title title title--huge container">О БАНЕ</h2>
        <div class="about-bath__slider slider slider--about-bath">
            <Swiper class="about-bath__slider-container"
                :breakpoints="{
                    345: {
                        spaceBetween: 12,
                        slidesPerView: 2.1
                    },
                    768: {
                        spaceBetween: 24,
                        slidesPerView: 2.5
                    },
                    1440: {
                        spaceBetween: 24,
                        slidesPerView: 4
                    }
                }"
                grab-cursor
                :slide-active-class="'about-bath__slider-item--active'">
                <SwiperSlide class="about-bath__slider-item">
                    <UiPhotoCardWithCaption :image-src="cardImage1"
                        :caption="'Диодное автономное освещение'" />
                </SwiperSlide>
                <SwiperSlide class="about-bath__slider-item">
                    <UiPhotoCardWithCaption :image-src="cardImage2"
                        :caption="'Вместительная парная и предбанник'" />
                </SwiperSlide>
                <SwiperSlide class="about-bath__slider-item">
                    <UiPhotoCardWithCaption :image-src="cardImage3"
                        :caption="'Печь Ермак с паропреобразователем'" />
                </SwiperSlide>
                <SwiperSlide class="about-bath__slider-item">
                    <UiPhotoCardWithCaption :image-src="cardImage4"
                        :caption="'Природный материал: ель и осина'" />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script setup lang="ts">
import cardImage1 from "/images/about-card-photo-1.png"
import cardImage2 from "/images/about-card-photo-2.png"
import cardImage3 from "/images/about-card-photo-3.png"
import cardImage4 from "/images/about-card-photo-4.png"

</script>


<style lang="scss" scoped>
.about-bath {
    padding-bottom: 200px;


    &__title {
        margin-bottom: 24px;
    }

    &__slider {


        &-container {
            padding-left: 18px;

            @media #{$screen-tablet} {
                padding-left: 40px;
            }

            @media #{$screen-desktop} {
                padding-left: 80px;
            }
        }

        &-item {
            aspect-ratio: 1 / 1.6;

            transition: all .7s ease;

            @media #{$screen-desktop} {
                max-width: 298px;
            }

            &--active {
                aspect-ratio: 1 / 1.65;
            }

        }
    }

}
</style>