<template>
    <div class="container mx-auto my-4 lg:my-20 p-8">
        <ContentDoc class="prose-sm md:prose lg:prose-xl mx-auto prose-pre:mockup-code prose-p:leading-loose mt-4 md:prose-h2:mt-20 prose-h2:mt-10 prose-a:text-primary" />
        <div class="flex justify-between max-w-[800px] mx-auto my-4 lg:my-10">
            <NuxtLink v-if="prev" :to="prev._path" class="btn btn-ghost btn-xs">{{ prev.title }}</NuxtLink>
            <NuxtLink v-if="next" :to="next._path" class="btn btn-ghost btn-xs">{{ next.title }}</NuxtLink>
        </div>
        <Cursor class=" max-w-[800px] mx-auto cursor-pointer"></Cursor>
    </div>
</template>

<script setup lang='ts'>
const { page, prev, next } = useContent()
useContentHead(page)
</script>

<style scoped></style>
