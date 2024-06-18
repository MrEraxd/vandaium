<script setup lang="ts">
  const { $api } = useNuxtApp();
  const currentImageIndex = ref(0);

  const { data: product } = await $api.productService.getProduct();
</script>

<template>
  <div class="flex gap-x-3 items-start h-[480px]">
    <ProductGalleryPagination
      class="h-full"
      v-model="currentImageIndex"
      :images="product?.images ?? []"
    />

    <div class="aspect-square bg-white h-full p-16 grid place-items-center">
      <NuxtImg
        class=""
        :src="product?.images?.[currentImageIndex]?.sizes.sm ?? undefined"
      />
    </div>
  </div>
</template>
