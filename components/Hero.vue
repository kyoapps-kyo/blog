<template>
    <div class="mb-10 lg:mb-28 lg:mt-32 flex flex-col items-center justify-center px-6">
        <div class="flex w-full max-w-4xl flex-col gap-24 print:gap-10">
            <div></div>
            <div class="flex flex-col gap-6 mb-18">
                <h1 class="text-3xl md:text-6xl rainbow-text-primary md:leading-[5rem]">
                    <span class="font-black">Wuyang </span>
                    <span class="font-extralight">Kyo.</span>
                </h1>
                <h2><span ref="typedEl" class="md:text-xl rainbow-text-second"></span></h2>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Typed from 'typed.js'
let typed: Typed
const typedEl = ref()
onMounted(() => {
    if (window && window !== undefined) {
        typed = new Typed(typedEl.value, {
            strings: [`Pro${WAIT_TIME_500}duct designer${WAIT_TIME_1000} &amp;${WAIT_TIME_700} Front${WAIT_TIME_500}-end${WAIT_TIME_300} developer${WAIT_TIME_1000}`,`Now &amp;Prompt Engineer ${WAIT_TIME_500}?${WAIT_TIME_1000}`],
            typeSpeed: 50,
            loop: true
        })
    }

})
onUnmounted(() => {
    if (typed) {
        typed.destroy()
    }
})

</script>

<style scoped></style>
