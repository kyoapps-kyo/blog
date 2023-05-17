<script setup lang="ts">
const headerEl = ref<HTMLElement>();
const isActive = ref<boolean>(false);

onMounted(() => {
    const handleScroll = debounce(() => {
        isActive.value = !!headerEl.value && window.pageYOffset > headerEl.value.offsetHeight;
        console.log(isActive.value);
    }, 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}); 
</script> 

<template>
    <div class="drawer drawer-end">
        <DrawerInput></DrawerInput>
        <div class='flex flex-col w-full min-h-screen drawer-content'>
            <!-- 头部 -->
            <header class="bg-base-100 w-full z-50" ref="headerEl">
                <NavBar class="container mx-auto"></NavBar>
            </header>
            <!-- 主体 -->
            <main class="bg-base-100 flex-grow">
                <slot></slot>
            </main>
            <!-- 尾部 -->
            <footer class="footer items-center justify-center p-4 bg-neutral text-neutral-content">
                <div>support by Wuyang Kyo</div>
            </footer>
        </div>
        <DrawerSide class="lg:hidden"></DrawerSide>
    </div>
</template>
<style scoped></style>