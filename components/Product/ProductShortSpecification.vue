<script setup lang="ts">
  import type { ProductSpecificationEntry } from "@/localTypes/Product";

  defineProps<{
    energyClassCardLink: string;
    energyClass: string;
    shortSpecification: ProductSpecificationEntry[];
  }>();

  function scrollToSpecification() {
    console.log("Implement scroll to specification");
  }
</script>

<template>
  <div
    class="bg-white rounded-sm p-4 w-full justify-between shrink-0 flex flex-col"
  >
    <div>
      <div class="font-medium text-lg mb-8">Specyfikacja</div>

      <div class="flex items-center gap-x-3 mb-6">
        <div class="flex flex-col">
          <span>Klasa energetyczna</span>
          <NuxtLink
            class="text-sm leading-3 text-gray-500"
            :to="energyClassCardLink"
          >
            Karta informacyjna
          </NuxtLink>
        </div>

        <BaseSvg
          height="40px"
          icon-class="w-full h-full"
          :svg-name="`energy-label-${energyClass}`"
        />
      </div>

      <ul class="flex gap-y-1 flex-col">
        <li
          v-for="specEntry in shortSpecification"
          :key="specEntry.label"
        >
          <span class="font-light">{{ `${specEntry.label}: ` }}</span>
          <span class="font-medium">{{ specEntry.value }}</span>
        </li>
      </ul>
    </div>

    <button
      @click="scrollToSpecification()"
      class="flex items-center gap-x-2 mt-20"
    >
      <span class="font-light text-gray-300">Zobacz pełną specyfikację</span>
      <BaseSvg svg-name="icon-arrow-interactive" />
    </button>
  </div>
</template>
