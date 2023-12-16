<template>
    <button class="button-book">
        <span class="button-book__box button-book__box--big">
            <SvgIcon class="button-book__box-icon"
                name="book-now-green-circle" />
        </span>
        <span class="button-book__box button-book__box--small">
            <SvgIcon name="book-now-green-circle" />
        </span>
        <span class="button-book__arrow">
            <SvgIcon class="button-book__box-icon"
                name="arrow-left-top" />
        </span>
    </button>
</template>

<style lang="scss" scoped>
.button-book {
    position: relative;

    &__box {
        display: inline-block;

        animation: rotate linear infinite 6s;

        &--big {
            width: 146px;
            height: 146px;

            display: none;

            @media #{$screen-tablet} {
                display: block;
            }
        }

        &--small {
            width: 90px;
            height: 90px;

            @media #{$screen-tablet} {
                display: none;
            }
        }

        &-icon {
            width: 100%;
            height: 100%
        }

    }

    &__arrow {
        @include absolute-center;

        width: 30px;
        height: 30px;

        color: white;

        @media #{$screen-tablet} {
            width: 50px;
            height: 50px;
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
}
</style>