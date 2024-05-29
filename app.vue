<template>
   <NuxtLayout>
      <NuxtErrorBoundary>
         <NuxtPage />
      </NuxtErrorBoundary>
   </NuxtLayout>
</template>
<script setup lang="ts">
// useSeoMeta({
//    title: "My Amazing Site",
//    ogTitle: "My Amazing Site",
//    description: "This is my amazing site, let me tell you all about it.",
//    ogDescription: "This is my amazing site, let me tell you all about it.",
//    ogImage: "https://example.com/image.png",
//    twitterCard: "summary_large_image",
// });
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
   transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
   opacity: 0;
   filter: blur(1rem);
}
</style>
