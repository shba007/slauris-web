<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: {
    id: string
    title: string
  }
}>()
</script>

<template>
  <div class="relative aspect-[79/71] w-full bg-light-500 md:max-w-[395px]">
    <NuxtImg :src="image.id" :alt="image.title" :width="395" :height="271" loading="lazy" class="relative inline-block w-full object-contain object-bottom" />
    <div class="absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-6">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p class="text-base opacity-50">{{ description }}</p>
    </div>
  </div>
</template>
