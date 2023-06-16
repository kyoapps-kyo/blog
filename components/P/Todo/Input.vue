<template>
    <div class="join">
        <input class="input join-item input-bordered w-28 md:w-60" placeholder="some content" v-model.lazy="title" />
        <button class="btn join-item rounded-full ml-2" @click="addTitle">add</button>
    </div>
</template>

<script setup lang='ts'>
const emit = defineEmits(['add'])
const title = ref()
function addTitle() {
    if (title.value) {
        emit('add', title.value)
    }

    title.value = ''
}
</script>

<style scoped></style>
