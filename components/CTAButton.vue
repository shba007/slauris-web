<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <button class="flex w-fit items-center gap-1">
    <span
      class="relative flex h-full items-center justify-center bg-light-500 px-4 lg:px-6 text-center align-baseline text-sm dark:bg-dark-500 md:text-base">
      {{ title }}
    </span>
    <span class="-scale-x-[1] bg-black p-2.5 lg:p-3.5">
      <NuxtIcon name="chevron" class="text[20px] lg:text-[28px] text-white" />
    </span>
  </button>
</template>
