<script setup lang="ts">
  import type {
    ProductDynamic,
    ProductBadge,
    ProductReviews,
  } from "@localTypes/Product";

  defineProps<{
    productName: string;
    catalogNumber: string;
    badges: ProductBadge[];
    reviews: ProductReviews;
  }>();

  const quantitySelected = ref(1);

  const { data: product, pending } = await useAsyncData<ProductDynamic>(
    "productLive",
    () => $fetch("http://127.0.0.1:8000/products/289012312/dynamic"),
    {
      dedupe: "cancel",
      server: false,
    }
  );
</script>

<template>
  <div class="flex-1 bg-white p-4 rounded-sm flex flex-col">
    <div class="flex justify-between items-center mb-6">
      <div>
        <div
          v-for="badge in badges"
          :key="badge.label"
          class="px-2 py-1 rounded-sm uppercase text-xs"
          :style="{
            backgroundColor: badge.backgroundColor,
            color: badge.textColor,
          }"
        >
          {{ badge.label }}
        </div>
      </div>

      <div class="flex gap-x-2 items-center">
        <BaseSvg svg-name="icon-scale" />
        <BaseSvg svg-name="icon-add-to-wishlist" />
      </div>
    </div>

    <ProductReview
      class="mb-1"
      :rating="reviews.rating"
      :number-of-reviews="reviews.items.length"
    />

    <div class="mb-10">
      <h1 class="font-medium text-xl">{{ productName }}</h1>
      <div class="text-xs text-gray-300 leading-3">
        {{ `Nr katalogowy: ${catalogNumber}` }}
      </div>
    </div>

    <div
      v-if="pending"
      class="mb-6 h-12 animate-pulse bg-gray-200 rounded-sm self-start w-48"
    />

    <div
      v-else
      class="mb-6 h-12 self-start"
    >
      <div class="flex items-end gap-x-2">
        <span
          class="text-primary-500 text-2xl font-medium leading-6"
          v-if="product?.price"
        >
          {{ product.price }}
        </span>

        <span
          class="line-through font-medium leading-4"
          v-if="product?.priceBeforeDiscount"
        >
          {{ product.priceBeforeDiscount }}
        </span>
      </div>

      <span
        class="text-xs leading-3"
        v-if="product?.bestPrice"
      >
        {{ `Najniższa cena z 30dni: ${product.bestPrice}` }}
      </span>
    </div>

    <div class="flex flex-col gap-y-1">
      <div class="flex gap-x-2">
        <BaseSelect v-model="quantitySelected">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </BaseSelect>

        <BaseButton />
      </div>

      <div
        v-if="pending"
        class="h-4 animate-pulse bg-gray-200 rounded-sm w-32 self-start"
      />

      <div
        v-if="product?.availableAmount"
        class="text-xs text-gray-600 h-4"
      >
        {{ `Pozostało sztuk: ${product?.availableAmount}` }}
      </div>
    </div>
  </div>
</template>
