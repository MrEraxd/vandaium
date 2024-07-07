<script setup lang="ts">
  import type { ProductImage } from "@localTypes/Product";

  export interface ProductGalleryPaginationProps {
    images: ProductImage[];
  }

  defineProps<ProductGalleryPaginationProps>();
  const currentImageIndex = defineModel({ default: 0 });

  const scrollableContainer = ref();
  const { x, y } = useScroll(scrollableContainer, { behavior: "smooth" });

  function handleImageClicked(index: number) {
    currentImageIndex.value = index;
  }
</script>

<template>
  <div class="flex 2xl:flex-col gap-2 h-24 2xl:h-full 2xl:w-24 2xl:hidden">
    <button
      @click="x -= 60"
      class="bg-white p-2 rounded-sm flex 2xl:hidden items-center justify-center"
    >
      <BaseSvg
        class="-rotate-90"
        svg-name="icon-arrow-product-gallery"
      />
    </button>

    <button
      @click="y -= 60"
      class="bg-white p-2 rounded-sm hidden items-center justify-center 2xl:flex"
    >
      <BaseSvg svg-name="icon-arrow-product-gallery" />
    </button>

    <div
      ref="scrollableContainer"
      class="w-full flex gap-2 2xl:flex-col *:bg-white *:aspect-square overflow-y-scroll no-scrollbar snap-y snap-mandatory scroll-smooth"
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
      @click="x += 60"
      class="bg-white p-2 rounded-sm flex items-center 2xl:hidden justify-center"
    >
      <BaseSvg
        svg-name="icon-arrow-product-gallery"
        class="rotate-90"
      />
    </button>

    <button
      @click="y += 60"
      class="bg-white p-2 rounded-sm hidden 2xl:flex items-center justify-center"
    >
      <BaseSvg
        svg-name="icon-arrow-product-gallery"
        class="rotate-180"
      />
    </button>
  </div>
</template>
