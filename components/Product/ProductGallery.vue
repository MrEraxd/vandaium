<script setup lang="ts">
  import type { ProductImage } from "@localTypes/Product";

  export interface ProductGalleryProps {
    images: ProductImage[];
  }

  const props = defineProps<ProductGalleryProps>();

  const currentImageIndex = ref(0);
</script>

<template>
  <div class="flex gap-x-3 items-start h-[520px]">
    <ProductGalleryPagination
      class="h-full"
      v-model="currentImageIndex"
      :images="images"
    />

    <div class="aspect-square bg-white h-full p-16 grid place-items-center">
      <NuxtImg
        class=""
        :src="images?.[currentImageIndex]?.sizes.sm ?? undefined"
      />
    </div>
  </div>
</template>
