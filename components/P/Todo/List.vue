<template>
    <TransitionGroup name="list" tag="ul">
        <li v-for="content in list" :key="content.id" class="my-4">
            <div class="join">
                <span class="inline-block w-32 md:w-[258px] px-4 truncate">{{ content.title }}</span>
                <button class="btn join-item btn-circle" @click="deleteTitle(content.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </li>
    </TransitionGroup>
</template>

<script setup lang='ts'>
const props = defineProps([
    'list'
])
const emit = defineEmits(['delete'])

function deleteTitle(id: string) {
    emit('delete', id)
}

</script>

<style scoped>
.list-move,
/* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translate(30px, -30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
    position: absolute;
}
</style>
