<template>
  <div title="Change Theme" class="dropdown dropdown-end p-0 ">
    <div tabindex="0" class="btn normal-case btn-ghost p-0"><svg width="20" height="20"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
        </path>
      </svg> <span class="hidden md:inline">主题</span> <svg width="12px" height="12px"
        class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048">
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg></div>
    <div
      class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
      <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
        <template v-for="theme of themes" :key="theme">
          <button class="outline-base-content overflow-hidden rounded-lg text-left"
            :class="{ '[&_svg]:visible': isActive(theme) }" @click="changeColor(theme)">
            <div :data-theme="theme" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
              <div class="grid grid-cols-5 grid-rows-3">
                <div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center"><svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
                    class="w-3 h-3 invisible">
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>
                  <div class="flex-grow text-sm font-bold">{{ theme }}</div>
                  <div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
                    <div class="bg-primary w-2 rounded"></div>
                    <div class="bg-secondary w-2 rounded"></div>
                    <div class="bg-accent w-2 rounded"></div>
                    <div class="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
const { site } = useAppConfig()
const { themes } = site
const currentColor = ref()


const changeColor = (theme: string) => {
  colorMode.preference = theme
  currentColor.value = theme
}

const isActive = (theme: string) => {
  return currentColor.value === theme ? true : false
}

const colorInit = () => {
  if (localStorage.getItem('nuxt-color-mode') && localStorage.getItem('nuxt-color-mode') !== undefined) {
    currentColor.value = localStorage.getItem('nuxt-color-mode')
  }else{
    currentColor.value = colorMode.preference
  }
}

onMounted(() => {
  colorInit()
})
</script>

<style></style>