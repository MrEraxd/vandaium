<script setup lang="ts">
  import type { TheBreadcrumbsProps } from "@/components/TheBreadcrumbs.vue";
  import type { ProductGalleryProps } from "~/components/Product/ProductGallery.vue";

  const breadcrumbsInfo: TheBreadcrumbsProps = {
    links: [
      { name: "Monitory", href: "/category/monitors" },
      { name: "Monitory OLED", href: "/category/monitors-oled" },
      { name: "Monitor MSI MPG 271QRX QD-OLED", href: "" },
    ],
  };

  const productGalleryInfo: ProductGalleryProps = {
    images: [
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/200",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/400",
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
    ],
  };
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <TheBreadcrumbs v-bind="breadcrumbsInfo" />

    <ProductGallery v-bind="productGalleryInfo" />
  </div>
</template>
