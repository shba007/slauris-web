<template>
  <section id="hero"
    class="flex flex-col-reverse gap-10 md:mt-6 md:flex-row md:justify-between md:gap-4 lg:mb-12 lg:mt-12">
    <div class="flex flex-col items-center md:items-start gap-9 whitespace-nowrap text-center md:text-left">
      <h1 class="text-lg lg:text-4xl">
        Connecting Wholesalers <br />
        Directly to Retailers
      </h1>
      <p class="text-base lg:text-xl">
        Eliminate <strong>brokerage</strong> fees <br />
        and gain broader <strong>market</strong> exposure
      </p>
      <CTAButton title="Learn More" />
    </div>
    <div class="h-full grow">
      <NuxtImg src="/images/drone.png" alt="drone" :width="794" />
    </div>
  </section>
</template>
