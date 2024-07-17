<script setup lang="ts">
  import type { ProductSize } from "@localTypes/ShopwareProduct";

  export interface ProductSizesProps {
    sizes: ProductSize[];
  }

  defineProps<ProductSizesProps>();
</script>

<template>
  <div class="grid grid-cols-6 gap-2 mb-8">
    <div
      v-for="size in sizes"
      :key="size.value"
      class="border border-black grid place-items-center py-2 hover:bg-black hover:text-white cursor-pointer"
    >
      {{ size.label }}
    </div>
  </div>
</template>
