<template>
    <li v-for="item of list" :key="item.link"><NuxtLink :to="item.link" class="nav-link">{{ item.title }}</NuxtLink></li>
</template>

<script setup lang='ts'>
const list = [
    {
        link: '/posts',
        title: '全部'
    },
    // {
    //     link: '/archive',
    //     title: '归档'
    // },
    {
        link: '/category',
        title: '分类'
    },
    {
        link: '/tag',
        title: '标签'
    }
]
</script>

<style scoped>
	.nav-link.router-link-active.router-link-exact-active {
		@apply text-primary;
	}
</style>
