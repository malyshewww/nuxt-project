import { defineStore } from "pinia";
export const useProductsStore = defineStore("productsStore", {
   state: () => ({
      products: [],
      cart: [],
   }),
   getters: {
      getProducts: (state) => {
         return state.products;
      },
      getProductDetails: (state) => {
         return (id) => state.products.find((product) => product.id === id);
      },
   },
   actions: {
      async fetchProductsFromDB() {
         const res = await fetch("https://dummyjson.com/products");
         const data = await res.json();
         this.products = data.products;
      },
      addToCart(product) {
         this.cart.push(product);
      },
      removeFromCart(id) {
         console.log(">>>>> ID", id);
         this.cart = this.cart.filter((item) => item.id !== id);
      },
   },
});
