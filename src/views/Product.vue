<script setup>
import { useRoute } from "vue-router";
import data from "../data/index.json";
const route = useRoute();
const product = data.find((res) => res.id === parseInt(route.params.id));
</script>


<template>
  <div>
    <h1>Products</h1>
    <h2>id : {{ product.id }}</h2>
    <p>{{ product.item }}</p>
  </div>
</template>
