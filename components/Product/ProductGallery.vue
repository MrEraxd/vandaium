<script setup lang="ts">
  export interface ProductGalleryProps {
    images: Array<string>;
  }

  const props = defineProps<ProductGalleryProps>();
</script>

<template>
  <div class="flex">
    <ProductGalleryPagination :images="props.images" />

    <div>
      <NuxtImg />
    </div>
  </div>
</template>
