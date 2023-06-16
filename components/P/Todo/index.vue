<template>
    <h1 class="text-3xl mb-10 text-center">
        简单 todo list
    </h1>
    <PTodoInput @add="addHandler"></PTodoInput>
    <PTodoList :list="content" @delete="deleteHandler"></PTodoList>
</template>

<script setup lang='ts'>
const content = ref([{
    id: 'id - 1',
    title: 'hello'
}])
function addHandler(title: string) {
    content.value.push({
        id: `id - ${Date.now()}`,
        title
    })
}
function deleteHandler(id: string) {
    //删除对象数组指定id的数据
    content.value = content.value.filter(item => item.id !== id)
}
</script>

<style scoped></style>
