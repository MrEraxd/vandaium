<script setup lang="ts">
  import type { ProductImage } from "@localTypes/Product";

  export interface ProductGalleryPaginationProps {
    images: ProductImage[];
  }

  defineProps<ProductGalleryPaginationProps>();
  const currentImageIndex = defineModel({ default: 0 });

  const scrollableContainer = ref();
  const { y } = useScroll(scrollableContainer, { behavior: "smooth" });

  function handleImageClicked(index: number) {
    currentImageIndex.value = index;
  }
</script>

<template>
  <div class="flex flex-col gap-y-2 w-24">
    <button
      @click="y -= 60"
      class="bg-white py-2 rounded-sm flex items-center justify-center"
    >
      <BaseSvg svg-name="icon-arrow-product-gallery" />
    </button>

    <div
      ref="scrollableContainer"
      class="w-full flex gap-y-2 flex-col *:bg-white *:aspect-square] overflow-y-scroll no-scrollbar snap-y snap-mandatory scroll-smooth"
    >
      <div
        v-for="(image, index) in images"
        :key="image.alt"
        @click="handleImageClicked(index)"
        class="flex snap-start"
      >
        <img
          class="w-full aspect-square p-4 object-contain"
          :src="image.sizes.sm ?? undefined"
        />
      </div>
    </div>

    <button
      @click="y += 60"
      class="bg-white py-2 rounded-sm flex items-center justify-center"
    >
      <BaseSvg
        svg-name="icon-arrow-product-gallery"
        class="rotate-180"
      />
    </button>
  </div>
</template>
