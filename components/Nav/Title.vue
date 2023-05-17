<template>
    <div>
        <NuxtLink to="/" class="btn btn-ghost normal-case text-lg lg:text-xl"><span class="text-primary">{{ first}}</span><span>{{ next }}</span></NuxtLink>
    <pre>{{  }}</pre>
    </div>
</template>

<script setup lang='ts'>
const { site } = useAppConfig()
const { title } = site
const first = title.slice(0,1)
const next = title.slice(1);
</script>

<style scoped></style>
