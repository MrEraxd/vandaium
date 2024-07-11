<script setup lang="ts">
  import type { ProductVariationPossibleGroups } from "~/localTypes/Product";

  export interface ProductVariationGroupProps {
    group: ProductVariationPossibleGroups;
  }

  const props = defineProps<ProductVariationGroupProps>();

  const selectedValue = ref<string | null>(props.group.options[0].value);

  const selectedValueLabel = computed(() => {
    return props.group.options.find(
      (option) => option.value === selectedValue.value
    )?.label;
  });
</script>

<template>
  <div>
    <div
      v-if="group.showLabel"
      class="text-sm"
    >
      <span class="font-semibold">{{ `${group.groupLabel}: ` }}</span>
      <span>{{ selectedValueLabel }}</span>
    </div>

    <div
      v-if="group.groupType === 'colour'"
      class="flex flex-wrap gap-4 pt-2 pb-6 pl-1"
    >
      <label
        v-for="option in group.options"
        :key="option.value"
        class="aspect-square rounded-full border-gray-300 cursor-pointer outline-1 outline-offset-2 w-6 hover:outline"
        :class="{
          outline: selectedValue === option.value,
        }"
        :style="{
          backgroundColor: option.value,
        }"
      >
        <input
          type="radio"
          class="hidden"
          :value="option.value"
          v-model="selectedValue"
        />
      </label>
    </div>

    <div
      v-if="group.groupType === 'image'"
      class="flex flex-wrap gap-4 pt-2 pb-6"
    >
      <label
        v-for="option in group.options"
        :key="option.value"
        class="w-12 cursor-pointer"
        :class="{
          'border-1 border-b border-black': selectedValue === option.value,
        }"
      >
        <img
          :src="option.image"
          :alt="option.alt"
        />
        <input
          type="radio"
          class="hidden"
          :value="option.value"
          v-model="selectedValue"
        />
      </label>
    </div>

    <div
      v-if="group.groupType === 'text'"
      class="flex flex-wrap gap-4 pt-2 pb-6"
    >
      <label
        v-for="option in group.options"
        :key="option.value"
        class="border-1 border border-black w-12 flex items-center justify-center cursor-pointer"
      >
        <span>{{ option.label }}</span>
        <input
          type="radio"
          class="hidden"
          :value="option.value"
          v-model="selectedValue"
        />
      </label>
    </div>
  </div>
</template>
