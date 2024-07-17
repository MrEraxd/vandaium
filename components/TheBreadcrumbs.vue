<script setup lang="ts">
  const { getProduct } = useProductService();
  const { data: product } = await getProduct();
</script>

<template>
  <div
    v-if="product?.product.categoryTree"
    class="p-3 bg-white rounded-sm flex items-center gap-3"
  >
    <div class="flex gap-3 items-center">
      <NuxtLink to="/">
        <BaseSvg
          class="[&_path]:hover:stroke-primary-300 [&_path]:transition-colors [&_path]:duration-100 -translate-y-px"
          svg-name="icon-home"
        />
      </NuxtLink>

      <BaseSvg svg-name="icon-arrow-breadcrumbs" />
    </div>

    <ul class="flex items-center gap-3">
      <li
        v-for="(id, index) in product?.product.categoryTree"
        :key="id"
        class="flex items-center gap-3"
      >
        <NuxtLink
          :to="id"
          class="font-light hover:text-primary-500 transition-colors duration-100"
          :class="{
            'text-primary-500 font-medium':
              index === product?.product.categoryTree.length - 1,
          }"
        >
          {{ id }}
        </NuxtLink>

        <BaseSvg
          v-if="index < product?.product.categoryTree.length - 1"
          svg-name="icon-arrow-breadcrumbs"
        />
      </li>
    </ul>
  </div>
</template>
