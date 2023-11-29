<template>
    <div class="default-layout">
        <TheHeader />
        <NuxtPage />
        <TheFooter @up-button-clicked="scrollTop" />
    </div>
</template>

<script setup lang="ts">
function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.default-layout {
    min-height: 100vh;
}
</style>