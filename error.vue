<template>
   <NuxtLayout>
      <div>
         <h1>{{ error.statusCode }}</h1>
         <NuxtLink to="/">Go back home</NuxtLink>
      </div>
   </NuxtLayout>
</template>

<script setup lang="ts">
// import type { NuxtError } from "#app";

// const props = defineProps({
//    error: Object as () => NuxtError,
// });
</script>
