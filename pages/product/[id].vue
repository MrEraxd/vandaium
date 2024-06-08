<script setup lang="ts">
  import type { TheBreadcrumbsProps } from "@/components/TheBreadcrumbs.vue";
  import type { Product } from "@localTypes/Product";

  const breadcrumbsInfo: TheBreadcrumbsProps = {
    links: [
      { name: "Monitory", href: "/category/monitors" },
      { name: "Monitory OLED", href: "/category/monitors-oled" },
      { name: "Monitor MSI MPG 271QRX QD-OLED", href: "" },
    ],
  };

  const { data: product } = await useAsyncData<Product>(
    "product",
    () => $fetch("http://127.0.0.1:8000/products/1"),
    {
      dedupe: "cancel",
    }
  );
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <TheBreadcrumbs v-bind="breadcrumbsInfo" />

    <ProductGallery :images="product?.images" />
  </div>
</template>
