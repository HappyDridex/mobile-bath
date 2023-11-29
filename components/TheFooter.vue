<template>
    <footer class="footer container">
        <ul class="footer__links">
            <li class="footer__link"
                v-for="link in links"
                :key="link.text">
                <a class="footer__link-item"
                    :href="link.href"
                    :target="link?.target">
                    {{ link.text }}
                </a>
            </li>
        </ul>
        <button class="footer__button-up"
            @click="emit('up-button-clicked')">
            <IconsArrowTop />
        </button>
    </footer>
</template>

<script setup lang="ts">

const emit = defineEmits(["up-button-clicked"])

const links = [
    { text: "+7 (915) 054-47-14", href: "tel:+79150544714" },
    { text: "Согласие на обработку персональных данных", href: "/pdf/banya_personal_2023.pdf", target: "_blank" },
    { text: "Политика конфиденциальности", href: "/pdf/banya_policy_2023.pdf", target: "_blank" }
]

</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 64px;
    padding-bottom: 64px;

    &__links {
        display: flex;
        flex-direction: column;
        row-gap: 24px;

        flex-basis: 50%;
        flex-grow: 0;

        @media #{$screen-tablet} {
            flex-direction: row;
            flex-wrap: wrap;
            row-gap: 32px;

            flex-basis: auto;
            flex-grow: 1;
        }

        @media #{$screen-desktop} {
            flex-wrap: nowrap;
            justify-content: space-between;

            flex-basis: 80%;
            flex-grow: 0;
        }
    }

    &__link {
        @media #{$screen-tablet} {
            width: 50%;
        }

        @media #{$screen-desktop} {
            width: fit-content;
        }

        &-item {
            font-size: $font-size-tiny;
            line-height: $line-height-medium;

            color: $color-primary-light;

            @media #{$screen-tablet} {
                font-size: $font-size-normal;
            }

        }
    }

    &__button-up {
        width: 32px;
        height: 32px;

        margin-left: 30px;

        color: $color-primary-light;

        @media #{$screen-tablet} {
            width: 50px;
            height: 50px;
        }
    }
}
</style>