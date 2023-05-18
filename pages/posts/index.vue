<template>
    <div class=" max-w-[700px] mx-auto p-8 mt-10">
        <h2 class="text-4xl font-bold mb-10 text-base-content">Posts</h2>
        <template v-for="key in Object.keys(navItemsByYear)">
            <div class=" relative min-h-[8rem] mb-10">
                <h2
                    class="absolute -top-10 -left-10 text-[9rem] leading-[9rem] opacity-20 stroke-text font-mono z-0 pointer-events-none">
                    {{ key }}</h2>
                <div class=" min-h-[6rem] text-xl text-base-content font-medium text-opacity-90 px-6 z-10">
                    <ContentNavigation :navigation="(navItemsByYear[key] as NavItem[])"></ContentNavigation>
                </div>
            </div>
        </template>
        <p class="font-mono">
            <span>&gt;&nbsp;&nbsp;</span>
            <NuxtLink @click.stop="router.go(-1)">
                <span class="underline underline-offset-8 decoration-1">cd&nbsp;..</span>
            </NuxtLink>
            <span class="cursor text-lg"></span>
        </p>
    </div>
</template>

<script setup lang='ts'>
const head = useHead({
    title: 'Posts'
})
interface NavItem {
    _path: string
    navigation: navigation
}
interface navigation {
    title: string
    date: string
    [key: string]: any
}
const router = useRouter()
const queryNavItems = async (): Promise<NavItem[]> => {
    const navItems = await queryContent('posts', 'articles').find()
    return navItems
        .filter((item): item is any & { _path: string } => Boolean(item._path))
        .map((item) => ({ _path: item._path, navigation: item.navigation }))
}
const classifyNavItemsByYear = async (): Promise<Record<string, NavItem[]>> => {
    const navItems = await queryNavItems()
    const navItemsByYear: Record<string, NavItem[]> = {}
    navItems.forEach((item) => {
        const year = new Date(item.navigation.date).getFullYear().toString()
        if (!navItemsByYear[year]) {
            navItemsByYear[year] = []
        }
        navItemsByYear[year].push(item)
    })
    return navItemsByYear
}
const navItemsByYear = await classifyNavItemsByYear()

</script>

<style scoped>
.cursor {
    display: inline-block;
    width: 2px;
    height: 16px;
    background-color: hsl(var(--bc));
    animation: blink 1s linear infinite;
    position: relative;
    top: 2px;
    left: 8px;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}
</style>
