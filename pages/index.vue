<template>
   <h1>Главная</h1>
   <ul>
      <li v-for="p in productsStore.products" :key="p.id">
         {{ p.title }}
      </li>
   </ul>
</template>

<script setup lang="ts">
const productsStore = useProductsStore();
productsStore.fetchProductsFromDB();
</script>
