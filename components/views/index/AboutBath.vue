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
                        slidesPerView: 'auto'
                    },
                    1440: {
                        spaceBetween: 24,
                        slidesPerView: 'auto'
                    }
                }"
                grab-cursor>
                <SwiperSlide class="about-bath__slider-item">

                    <UiPhotoCardWithCaption :image-src="cardImage1"
                        :caption="'Диодное автономное освещение'"
                        :caption-plate-bottom-position="'5%'" />
                </SwiperSlide>
                <SwiperSlide class="about-bath__slider-item">

                    <UiPhotoCardWithCaption :image-src="cardImage2"
                        :caption="'Вместительная парная и предбанник'"
                        :caption-plate-bottom-position="'5%'" />
                </SwiperSlide>
                <SwiperSlide class="about-bath__slider-item">

                    <UiPhotoCardWithCaption :image-src="cardImage3"
                        :caption="'Печь Ермак с паропреобразователем'"
                        :caption-plate-bottom-position="'5%'" />
                </SwiperSlide>
                <SwiperSlide class="about-bath__slider-item">

                    <UiPhotoCardWithCaption :image-src="cardImage4"
                        :caption="'Природный материал: ель и осина'"
                        :caption-plate-bottom-position="'5%'" />
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

    &__title {
        margin-bottom: 24px;
    }

    &__slider {

        &-container {
            height: 72vw;
            padding-left: 18px;
            padding-right: 18px;
            overflow: hidden;

            @media #{$screen-tablet} {
                height: 516px;
                padding-left: 40px;
            }

            @media #{$screen-desktop} {
                @include margin-left-to-container;

                padding-left: 80px;
            }
        }

        &-item {
            height: 100%;

            transition: all .7s ease;

            @media #{$screen-tablet} {
                width: 298px !important;
            }

            &--active {
                height: 100%;
            }

        }
    }
}
</style>