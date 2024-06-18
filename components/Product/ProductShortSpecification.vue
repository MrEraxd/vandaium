<script setup lang="ts">
  function scrollToSpecification() {
    console.log("Implement scroll to specification");
  }

  const { $api } = useNuxtApp();
  const { data: product } = await $api.productService.getProduct();
</script>

<template>
  <div
    v-if="product?.shortSpecification"
    class="bg-white rounded-sm p-4 w-80 justify-between flex flex-col"
  >
    <div>
      <div class="font-medium text-lg mb-8">Specyfikacja</div>

      <div class="flex items-center gap-x-3 mb-6">
        <div class="flex flex-col">
          <span>Klasa energetyczna</span>
          <NuxtLink
            class="text-sm leading-3 text-gray-500"
            :to="product?.energyClassCardLink"
          >
            Karta informacyjna
          </NuxtLink>
        </div>

        <BaseSvg
          height="40px"
          icon-class="w-full h-full"
          :svg-name="`energy-label-${product?.energyClass}`"
        />
      </div>

      <ul class="flex gap-y-1 flex-col">
        <li
          v-for="specEntry in product?.shortSpecification"
          :key="specEntry.label"
        >
          <span class="font-light">{{ `${specEntry.label}: ` }}</span>
          <span class="font-medium">{{ specEntry.value }}</span>
        </li>
      </ul>
    </div>

    <button
      @click="scrollToSpecification()"
      class="flex items-center gap-x-2"
    >
      <span class="font-light text-gray-300">Zobacz pełną specyfikację</span>
      <BaseSvg svg-name="icon-arrow-interactive" />
    </button>
  </div>
</template>
