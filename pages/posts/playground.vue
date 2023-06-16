<template>
    <div class="min-h-screen container mx-auto">
        <div class="flex flex-col md:flex-row mt-20">
            <ul class="pl-20 md:mt-20">
                <li v-for="item in componentsList" class="mb-4 flex w-60 justify-between">
                    <button class="btn w-full" @click="componentSelect(item.name)">
                        <span class="inline-block w-40 truncate ">{{ item.title }}</span>
                        <IconCSS name="simple-line-icons:arrow-right" class="ml-4" />
                    </button>
                </li>
            </ul>
            <div class="divider lg:divider-horizontal"></div>
            <div class="relative w-full">
                <div ref="absoluteBox" class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0">
                    <component :is="crr"></component>
                </div>
            </div>
            {{ height }}
        </div>
    </div>
</template>

<script setup lang='ts'>
const componentsList = [
    {
        name: 'PTodo',
        title: '简单Todo list'
    },
    {
        name: 'PCommunication',
        title: '组件间的通信'
    }
]

const crr = ref('PTodo')
const absoluteBox = ref(null)
const { width, height } = useElementSize(absoluteBox)

function componentSelect(name: string) {
    crr.value = name || 'PTodo'
}

onMounted(()=>{
    const parent = absoluteBox.value
    console.log();
    
})

</script>

<style scoped></style>
