<script setup lang="ts">
  import type { ProductAdditionalServiceItem } from "@/localTypes/Product";

  export interface ProductAdditionalServicesProps {
    additionalServices: ProductAdditionalServiceItem[];
  }

  defineProps<ProductAdditionalServicesProps>();
</script>

<template>
  <div class="p-4 bg-white rounded-sm">
    <div class="font-medium text-lg mb-6">Dodatkowe usługi</div>

    <div class="flex flex-col gap-y-6">
      <div
        v-for="service in additionalServices"
        :key="service.name"
        class="flex gap-x-4 items-start"
      >
        <input
          type="checkbox"
          name=""
          id=""
        />

        <div class="flex flex-col gap-y-1">
          <span class="leading-4 font-medium">{{ service.name }}</span>
          <NuxtLink
            class="text-sm leading-3 text-primary-500 underline font-medium"
            :to="service.linkToDetails"
            target="_blank"
          >
            Szczegóły
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
