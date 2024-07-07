<script setup lang="ts">
  import type { ProductVariationGroup } from "~/localTypes/Product";

  export interface ProductVariationGroupProps {
    group: ProductVariationGroup;
  }

  defineProps<ProductVariationGroupProps>();

  const selectedValue = ref<string | null>(null);
</script>

<template>
  <div>
    <div v-if="group.showLabel">
      {{ `${group.groupLabel}: ${selectedValue}` }}
    </div>
  </div>
</template>
