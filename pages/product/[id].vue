<script setup lang="ts">
  import type { TheBreadcrumbsProps } from "@/components/TheBreadcrumbs.vue";

  const breadcrumbsInfo: TheBreadcrumbsProps = {
    links: [
      { name: "Monitory", href: "/category/monitors" },
      { name: "Monitory OLED", href: "/category/monitors-oled" },
      { name: "Monitor MSI MPG 271QRX QD-OLED", href: "" },
    ],
  };

  const { $api } = useNuxtApp();
  const { data: product } = await $api.productService.getProduct();
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <TheBreadcrumbs v-bind="breadcrumbsInfo" />

    <div class="flex gap-x-3">
      <ProductGallery />

      <ProductShortSpecification />

      <ProductAddToCartSection
        v-if="product"
        :badges="product?.badges"
        :product-name="product?.name"
        :catalog-number="product?.id"
        :reviews="product?.reviews"
      />
    </div>

    <ProductDescription />
  </div>
</template>
