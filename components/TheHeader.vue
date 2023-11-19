<template>
    <header class="header">
        <div class="header__inner container">
            <h2 class="header__title title title--big">БАНЯ-БОЧКА</h2>
            <a href="tel:+79150544714"
                class="header__phone">
                <IconsPhoneOutline class="header__phone-icon" />
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

        padding-top: 32px;
        padding-bottom: 32px;
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

            @media #{$screen-tablet} {
                font-size: $font-size-large;
            }
        }
    }
}
</style>