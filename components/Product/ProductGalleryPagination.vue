<script setup lang="ts">
  export interface ProductGalleryPaginationProps {
    images: Array<string>;
  }

  const props = defineProps<ProductGalleryPaginationProps>();
  const scrollableContainer = ref();
  const { y } = useScroll(scrollableContainer, { behavior: "smooth" });

  function printScrollPosition(e: Event) {
    console.log((e.target as HTMLElement).scrollTop);
  }
</script>

<template>
  <div class="flex flex-col gap-y-2 w-24">
    <button
      @click="y -= 100"
      class="bg-white py-2 rounded-sm flex items-center justify-center"
    >
      <BaseSvg svg-name="icon-arrow-product-gallery" />
    </button>

    <div
      ref="scrollableContainer"
      @scroll="printScrollPosition"
      class="w-full flex gap-y-2 flex-col *:bg-white *:aspect-square max-h-[480px] overflow-y-scroll no-scrollbar snap-y snap-mandatory scroll-smooth"
    >
      <div
        v-for="image in images"
        :key="image"
        class="flex snap-start"
      >
        <img
          :src="images[0]"
          alt="Product Image"
        />
      </div>
    </div>

    <button
      @click="y += 100"
      class="bg-white py-2 rounded-sm flex items-center justify-center"
    >
      <BaseSvg
        svg-name="icon-arrow-product-gallery"
        class="rotate-180"
      />
    </button>
  </div>
</template>
