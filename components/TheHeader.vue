<template>
    <header class="header">
        <div class="header__inner container">
            <NuxtLink to="/"
                class="header__logo">
                <img class="header__logo-pic"
                    src="/images/logo.png"
                    alt="Логотип">
            </NuxtLink>
            <a href="tel:+79150544714"
                class="header__phone">
                <SvgIcon class="header__phone-icon"
                    name="phone-outline" />
                <span class="header__phone-text">
                    +7 (915) 054-47-14
                </span>
            </a>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding-top: 22px;
        padding-bottom: 22px;
    }

    &__logo {
        width: 120px;
        height: 52px;

        @media #{$screen-tablet} {
            width: 151px;
            height: 66px;
        }

        &-pic {
            @include object-contain-full;
        }

    }

    &__phone {
        display: flex;
        align-items: center;
        gap: 2px;

        @media #{$screen-tablet} {
            gap: 4px;
        }

        &-icon {
            width: $icon-size-mini;
            height: $icon-size-mini;

            @media #{$screen-tablet} {
                width: $icon-size-medium;
                height: $icon-size-medium;
            }
        }

        &-text {
            font-size: $font-size-small;
            white-space: nowrap;

            @media #{$screen-tablet} {
                font-size: $font-size-large;
            }
        }
    }
}
</style>