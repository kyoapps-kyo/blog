<script setup lang="ts">
import { dateToEnDate } from '@/utils/dateFormate'
interface NavItem {
  _path: string
  navigation: navigation
}
interface navigation {
  title: string
  date: string
  [key: string]: any
}
defineProps({
  navigation: {
    type: Array as () => NavItem[],
    default: () => []
  }
})
</script>

<template>
  <ul class="navigation flex flex-col gap-y-2 z-40">
    <li v-for="(item, index) in navigation" :key="index">
      <template v-if="item.navigation">
        <NuxtLink :to="item._path">
          <p class="py-2">{{ item.navigation.title }}</p>
        </NuxtLink>
        <span class="hidden">{{ `category` }}</span>
        <span class="text-base-content text-base opacity-60 font-mono">{{ dateToEnDate(item.navigation.date as string)
        }}</span>
      </template>
    </li>
  </ul>
</template>

<style scoped>
/* .navigation li {
  list-style-type: "· ";
} */
</style>
