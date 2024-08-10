<script setup lang="ts">
const features = [
  {
    title: 'Organize',
    description: 'Streamline your business processes',
    image: {
      id: '/images/rack.png',
      title: 'rack',
    },
  },
  {
    title: 'Connect',
    description: 'Find right partners effortlessly',
    image: {
      id: '/images/globe.png',
      title: 'globe',
    },
  },
  {
    title: 'Deliver',
    description: 'Efficient logistics solutions',
    image: {
      id: '/images/truck.png',
      title: 'truck',
    },
  },
]
</script>

<template>
  <section id="feature">
    <h2 class="mb-4 text-center text-lg md:mb-12 md:text-2xl">What We Do</h2>
    <div class="flex flex-col justify-between gap-4 md:flex-row">
      <CardFeature v-for="{ title, description, image } of features" :key="title" :title="title" :description="description" :image="image" />
    </div>
  </section>
</template>
