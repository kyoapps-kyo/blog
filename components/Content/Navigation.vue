<script setup >
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation(
    queryContent('posts', 'articles')
  )
})
</script>

<template>
  <NuxtExampleLayout example="navigation/fetch-content-navigation" repo="nuxt/content">
    <main class="text-left">
      <nav>
        <pre>{{ navigation }}</pre>
      </nav>
      <!-- <NuxtLink :to="navigation[0]?.children[0]?.children[0]?._path">click me</NuxtLink> -->
    </main>
  </NuxtExampleLayout>
</template>
