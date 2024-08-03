<script setup lang="ts">
const title = `Connecting Wholesalers Directly to Retailer`
const description = `Streamline your supply chain by connecting wholesalers directly to retailers. Cut out middlemen, reduce costs, and increase efficiency in B2B transactions. Discover how direct wholesaler-retailer connections can boost your business.`
const url = 'https://slauris.com'

useSeoMeta({
  ogType: 'profile',
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: url + '/previews/landing.webp',
  ogImageWidth: 1280,
  ogImageHeight: 640,
  ogUrl: url,
  fbAppId: 966242223397117,
  twitterCard: 'summary_large_image',
  colorScheme: 'light dark',
})

useSchemaOrg([
  defineLocalBusiness({
    name: 'Slauris',
    address: {
      streetAddress: 'Anand Raj Nagar, Belur Bally, Howrah',
      addressLocality: 'Howrah',
      addressRegion: 'WB',
      postalCode: '711227',
      addressCountry: 'IN',
    },
    image: url + '/logo.png',
  }),
  defineWebPage({
    datePublished: new Date(2024, 8, 1).toISOString(),
    dateModified: new Date(2024, 8, 1).toISOString(),
    author: 'Shirsendu Bairagi',
  }),
  defineWebSite({
    url: url,
    name: title,
    description: description,
  }),
])
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  scrollbar-width: 6px;
}

*::-webkit-scrollbar {
  @apply block size-[6px] bg-light-400 dark:bg-dark-400;
}

*::-webkit-scrollbar-thumb {
  @apply rounded-md bg-light-600 dark:bg-dark-600;
}

html {
  @apply relative overflow-x-hidden scroll-smooth;
}

body {
  @apply relative min-h-screen overflow-x-hidden bg-light-400 font-body text-black dark:bg-dark-400 dark:text-white;
}

.nuxt-icon > svg {
  @apply !m-0;
}

.scrollbar-hidden {
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
  scrollbar-width: none;
  /* Firefox */
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;
  /* Safari and Chrome */
}
</style>
