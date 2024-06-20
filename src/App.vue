<script setup>
import navbar from "./components/navbar.vue";
import products from "./data/index.json";
</script>

<template>
  <navbar></navbar>
  <div class="products">
    <div v-for="product in products" :key="product.id">
      <router-link :to="`/product/${product.id}`">
        <p>{{ product.item }}</p>
      </router-link>
    </div>
  </div>
  <RouterView />
</template>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  gap : 10px;
}

</style>