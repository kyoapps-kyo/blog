<template>
    <div class="container mx-auto mt-4 lg:mt-20 p-8">
        <ContentDoc class="prose-sm md:prose lg:prose-xl mx-auto" />
    </div>
</template>

<script setup lang='ts'>
const {page, prev, next } = useContent()
const head = useHead(page)
</script>

<style scoped></style>
