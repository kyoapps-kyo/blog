<template>
    <div class="container mx-auto mt-4 lg:mt-20 p-8">
        <ContentDoc class="prose-sm md:prose lg:prose-xl mx-auto prose-pre:mockup-code" />
    </div>
</template>

<script setup lang='ts'>
// const { page } = useContent()
// const head = useHead(page)
// 以上代码有问题
const { page } = useContent()
useContentHead(page)
//修复
</script>

<style scoped>
</style>
