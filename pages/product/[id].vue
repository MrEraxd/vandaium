<script setup lang="ts">
  const { getProduct } = useProductService();
  const { data: product } = await getProduct();

  const { apiClient } = useShopwareContext();
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <TheBreadcrumbs
      v-if="product?.breadcrumbs"
      :breadcrumbs="product.breadcrumbs"
    />

    <div class="grid grid-cols-[1fr_520px] gap-x-3">
      <div class="flex flex-col gap-y-3">
        <div class="gap-3 grid items-start">
          <ProductGallery class="min-w-0" />
        </div>

        <ProductDescription />
      </div>

      <div class="grid items-start gap-y-3">
        <ProductAddToCartSection
          v-if="product"
          :badges="product?.badges"
          :product-name="product?.name"
          :catalog-number="product?.id"
          :reviews="product?.reviews"
          :variation-groups="product?.variationGroups"
        />

        <!-- <ProductAdditionalServices
          v-if="product?.additionalServices"
          :additional-services="product.additionalServices"
        /> -->
      </div>
    </div>
  </div>
</template>
