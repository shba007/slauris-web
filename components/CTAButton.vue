<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <button class="flex w-fit items-center gap-1">
    <span class="relative flex h-full items-center justify-center bg-light-500 px-6 text-center align-baseline">{{ title }}</span>
    <span class="scale-x-[-1] bg-black p-3.5">
      <NuxtIcon name="chevron" class="text-[28px] text-white" />
    </span>
  </button>
</template>
