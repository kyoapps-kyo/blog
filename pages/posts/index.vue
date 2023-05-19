<template>
    <div class=" max-w-[700px] mx-auto p-8 mt-10">
        <h2 class="text-4xl font-bold mb-10 text-base-content">Posts</h2>
        <template v-for="a in navItemsArrayByYear">
            <div class=" relative min-h-[8rem] mb-10">
                <h2
                    class="absolute -top-10 -left-10 text-[9rem] leading-[9rem] opacity-20 stroke-text font-mono z-0 pointer-events-none">
                    {{ a.year }}</h2>
                <div class=" min-h-[6rem] text-xl text-base-content font-medium text-opacity-90 px-6 z-10">
                    <ContentNavigation :navigation="(a.items as NavItem[])"></ContentNavigation>
                </div>
            </div>
        </template>
        <Cursor></Cursor>
    </div>
</template>

<script setup lang='ts'>
const head = useHead({
    title: 'Posts'
})
interface NavItem {
  _path: string
  navigation: {
    title: string
    date: string
    [key: string]: any
  }
}

const queryNavItems = async (): Promise<NavItem[]> => {
  const navItems = await queryContent('posts').find()
  return navItems
    .filter((item): item is any & { _path: string } => Boolean(item._path))
    .map((item) => ({ _path: item._path, navigation: item.navigation }))
}

const navItemsArrayByYear = await (async () => {
  const navItems = await queryNavItems()
  const navItemsByYear: Record<string, NavItem[]> = {}
  navItems.forEach((item) => {
    const year = new Date(item.navigation.date).getFullYear().toString()
    if (!navItemsByYear[year]) {
      navItemsByYear[year] = []
    }
    navItemsByYear[year].push(item)
  })
  const navItemsArrayByYear = Object.entries(navItemsByYear)
    .map(([year, items]) => ({ year, items }))
    .sort((a, b) => Number(b.year) - Number(a.year))
  return navItemsArrayByYear
})()

console.log(navItemsArrayByYear)

</script>

<style scoped>

</style>
