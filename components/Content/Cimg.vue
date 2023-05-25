<template>
    <div>
        <nuxt-img :src="imgUrl" />
    </div>
</template>

<script setup lang='ts'>
defineProps({
    imgUrl: {
        type: String,
        default: ''
    }
})

</script>