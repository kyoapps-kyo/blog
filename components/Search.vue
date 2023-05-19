<script setup lang="ts">
const { result, search } = useAlgoliaSearch('test_BLOG')

onMounted(async () => {
  await search({ query: '文章示例' })
})
</script>

<template>
  <pre>{{ result }}</pre>
</template>
