<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <button class="relative flex items-stretch gap-1">
    <div class="relative flex grow items-center justify-center bg-light-500 px-4 dark:bg-dark-500 lg:px-6">
      {{ title }}
    </div>
    <span class="flex -scale-x-[1] items-center justify-center bg-black p-2.5 text-center align-middle lg:p-3.5">
      <NuxtIcon name="chevron" class="text[20px] text-white lg:text-[28px]" />
    </span>
  </button>
</template>
