<template>
    <figure class="photo-card-with-caption">
        <img class="photo-card-with-caption__image"
            :src="imageSrc"
            alt="Картинка карточки"
            loading="lazy">
        <div class="photo-card-with-caption__caption-plate"
            :style="{ bottom: `${captionPlateBottomPosition}` }">
            <figcaption class="photo-card-with-caption__caption">{{ caption }}</figcaption>
        </div>
    </figure>
</template>

<script setup lang="ts">
defineProps({
    imageSrc: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    captionPlateBottomPosition: {
        type: String,
        required: false
    }
})

</script>

<style lang="scss" scoped>
.photo-card-with-caption {
    position: relative;

    overflow: hidden;

    width: 100%;
    height: 100%;

    border-radius: $border-radius-small;

    @media #{$screen-tablet} {
        border-radius: $border-radius-big;
    }

    &__image {
        @include object-cover-full;
    }

    &__caption-plate {
        @include flex-all-center;

        position: absolute;
        bottom: 0;

        width: 100%;
        padding: 12px 8px;


        border-radius: $border-radius-small;

        background-color: rgba($cola, 0.8);
        backdrop-filter: blur(2px);

        @media #{$screen-tablet} {
            padding-top: 20px;
            padding-bottom: 20px;

            border-radius: $border-radius-medium;
        }

        @media #{$screen-desktop} {
            border-radius: $border-radius-big;
        }

    }

    &__caption {
        font-size: $font-size-tiny;
        font-weight: $font-weight-bold;
        line-height: $line-height-medium;
        text-align: center;

        @media #{$screen-tablet} {
            font-size: $font-size-big;
        }
    }
}
</style>