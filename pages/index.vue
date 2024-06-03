<template>
   <h1>Главная</h1>
   <ContentDoc />
   <!-- <ul>
      <li v-for="p in productsStore.products" :key="p.id">
         {{ p.title }}
      </li>
   </ul> -->
</template>

<script setup lang="ts">
useHead({
   bodyAttrs: {
      class: `page--home`,
   },
});
const productsStore = useProductsStore();
productsStore.fetchProductsFromDB();
</script>
