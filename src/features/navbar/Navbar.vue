<template>
  <div class="container">
    <div v-for="section in sections" :key="section">
      <DropDown :section="section" />
    </div>
  </div>
</template>

<script setup>
import DropDown from "../../components/DropDown.vue";
import { sections } from "./navSections";
console.log(sections);
</script>
