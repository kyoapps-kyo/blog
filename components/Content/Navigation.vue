<script setup lang="ts">
interface NavItem {
  title: string
  _path: string
  _id?: string
  _draft?: boolean
  children?: NavItem[]

  [key: string]: any
}
const props = defineProps({
  navigationTree: {
    type: Array as  ()=> NavItem[],
    default: () => []
  }
})
console.log(props.navigationTree);

</script>

<template>
  <ul class="navigation">
    <li v-for="(item, index) in navigationTree" :key="index">
      <NuxtLink :to="item._path">
        {{ item.title }}
      </NuxtLink>
      <ContentNavigation v-if="item.children" :navigation-tree="item.children" class="sub-navigation" />
    </li>
  </ul>
</template>

<style scoped>
.navigation li {
  list-style-type: "_ ";
}

.navigation ul {
  margin-left: 0.8rem;
}
</style>
