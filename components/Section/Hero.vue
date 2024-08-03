<template>
  <section id="hero" class="-500 mt-10 flex flex-col-reverse gap-10 md:mt-6 md:flex-row md:justify-between md:gap-4 lg:mb-12 lg:mt-12">
    <div class="flex flex-col gap-9">
      <h1 class="text-4xl">
        Connecting Wholesalers <br />
        Directly to Retailers
      </h1>
      <p class="text-xl">
        Eliminate <strong>brokerage</strong> fees <br />
        and gain broader <strong>market</strong> exposure
      </p>
      <CTAButton title="Learn More" />
    </div>
    <div class="h-full flex-1">
      <NuxtImg src="/images/drone.png" alt="drone" :width="794" class="absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-1/2" />
    </div>
  </section>
</template>
