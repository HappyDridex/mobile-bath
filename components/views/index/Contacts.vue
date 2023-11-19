<template>
    <section class="contacts container">
        <h2 class="contacts__title additional-services__title about-bath__title title title--huge">Контакты</h2>
        <div class="contacts__contact-us">
            <h3 class="contacts__contact-us-title">СВЯЖИТЕСЬ С НАМИ</h3>
            <ul class="contacts__list">
                <li class="contacts__item"
                    v-for="method in contactMethods"
                    :key="method.href">
                    <UiContactMethodItem :text="method.text"
                        :href="method.href">
                        <component :is="method.icon" />
                    </UiContactMethodItem>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">

const IconPhoneOutline = resolveComponent("IconsPhoneOutline")
const IconWhatsAppOutline = resolveComponent("IconsWhatsAppOutline")
const IconTelegramFilled = resolveComponent("IconsTelegramFilled")

const contactMethods = [
    { text: "+7 (915) 054-47-14", href: "tel:+79150544714", icon: IconPhoneOutline },
    { text: "+7 (995) 508-55-32", href: "https://wa.me/79955085532", icon: IconWhatsAppOutline },
    { text: "@Banya_msk1", href: "https://t.me/Banya_msk1", icon: IconTelegramFilled }
]

</script>

<style lang="scss" scoped>
@import "@/assets/css/_mixins.scss";

.contacts {
    &__title {}

    &__contact-us {

        &-title {
            @include text-normal;

            font-weight: $font-weight-heavy;
            line-height: $line-height-medium;

            margin-top: 24px;

            @media #{$screen-tablet} {
                margin-top: 32px;
            }

            @media #{$screen-desktop} {
                margin-top: 40px;
            }
        }
    }

    &__list {
        margin-top: 16px;

        @media #{$screen-tablet} {
            margin-top: 24px;
        }
    }

    &__item {
        &+& {
            margin-top: 12px;
        }

        @media #{$screen-tablet} {
            margin-top: 16px;
        }
    }
}
</style>