<script setup lang="ts">
  const { getProduct } = useProductService();
  const currentImageIndex = ref(0);

  const { data: product } = await getProduct();
</script>

<template>
  <div class="w-full flex flex-col 2xl:flex-row-reverse gap-3 items-start">
    <div class="grid place-items-center w-full xl:grid-cols-2 gap-4">
      <div
        class="bg-white rounded-sm aspect-square p-16 xl:aspect-[9/13] object-contain flex items-center justify-center w-full"
        v-for="media in product?.product?.media"
        :key="media.media.url"
      >
        <NuxtImg :src="media.media.url ?? undefined" />
      </div>
    </div>

    <!-- <ProductGalleryPagination
      v-model="currentImageIndex"
      :images="product?.images ?? []"
    /> -->
  </div>
</template>
