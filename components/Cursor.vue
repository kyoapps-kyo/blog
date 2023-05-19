<template>
    <p class="font-mono">
        <span>&gt;&nbsp;&nbsp;</span>
        <NuxtLink @click.stop="router.go(-1)">
            <span class="underline underline-offset-8 decoration-1">cd&nbsp;..</span>
        </NuxtLink>
        <span class="cursor text-lg"></span>
    </p>
</template>

<script setup lang="ts">
const router = useRouter()
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
