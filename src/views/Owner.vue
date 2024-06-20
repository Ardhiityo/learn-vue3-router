<script setup>
import { useRoute } from "vue-router";
import data from "../data/index.json";
const route = useRoute();

const { owner } = data.find((res) => res.id === parseInt(route.params.id));
</script>
    
<template>
  <div>
    <h1>Owner</h1>
    <h2>{{ owner.name }}</h2>
    <h2>{{ owner.email }}</h2>
  </div>
</template>

