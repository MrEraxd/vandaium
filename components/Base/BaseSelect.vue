<script setup lang="ts">
  const quantitySelected = defineModel();
</script>

<template>
  <select
    class="border border-gray-300 rounded-sm px-2"
    v-model="quantitySelected"
  >
    <slot />
  </select>
</template>
