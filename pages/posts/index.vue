<template>
    <div>
        <ContentNavigation :navigation-tree="navigation as NavItem[]"></ContentNavigation>
    </div>
</template>

<script setup lang='ts'>
interface NavItem {
  title: string
  _path: string
  _id?: string
  _draft?: boolean
  children?: NavItem[]

  [key: string]: any
}
const queryYearArr = ['2021', '2022', '2023']
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation(
    queryContent('posts', 'articles')
  )
})
const data = []
async function setDataByYear(yearArr : Array<string>): Promise<void>{
  for(const year in yearArr){
    
  }
}
</script>

<style scoped>

</style>
