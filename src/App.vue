<script setup>
import { onMounted } from "vue";
import Navbar from "./features/navbar/Navbar.vue";
import store from "./store";

onMounted(() => {
  store.dispatch("getTopAnime");
});
</script>

<template>
  <Navbar />
</template>
