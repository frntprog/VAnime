<template>
  <div class="container mx-auto px-6">
    <div class="text-left inline-flex flex-col">
      <button @click="opened = !opened" class="p-3 bg-white">Anime</button>
      <div v-if="opened" class="bg-white border-t border-gray-300">
        <div v-for="item in section" :key="item">
          <router-link
            class="block p-3 border-b border-gray-300 hover:bg-gray-300"
            to="item.link"
            >{{ item.name }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  section: Array,
});

let opened = ref(false);
</script>
