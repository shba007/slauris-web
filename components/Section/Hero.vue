<template>
  <section id="hero" class="relative flex flex-col-reverse items-center gap-10 md:mt-6 md:flex-row md:justify-between md:gap-4 lg:mb-12 lg:mt-12">
    <div class="flex flex-col items-center gap-9 whitespace-nowrap text-center md:items-start md:text-left">
      <h1 class="text-lg lg:text-4xl">
        Connecting Wholesalers <br />
        Directly to Retailers
      </h1>
      <p class="text-base lg:text-xl">
        Eliminate <strong>brokerage</strong> fees <br />
        and gain broader <strong>market</strong> exposure
      </p>
      <ButtonCTA title="Learn More" />
    </div>
    <div class="relative h-full w-screen grow md:w-auto">
      <NuxtImg src="/images/drone.png" alt="drone" :width="794" :height="529" />
    </div>
  </section>
</template>
