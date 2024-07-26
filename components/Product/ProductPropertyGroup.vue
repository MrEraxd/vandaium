<script setup lang="ts">
  import type { ShopwarePropertyGroup } from "~/localTypes/ShopwareProduct";

  export interface ProductPropertyGroupProps {
    group: ShopwarePropertyGroup;
    availableOptions: string[];
    availableOptionsWithCurrentlySelectedOptions: string[];
    selectedOptions: string[];
  }

  const props = defineProps<ProductPropertyGroupProps>();

  const selectedValue = defineModel();

  const selectedValueLabel = computed(() => {
    return props.group.options.find(
      (option) => option.id === selectedValue.value
    )?.translated.name;
  });
</script>

<template>
  <div>
    <div class="text-sm">
      <span class="font-semibold">{{ `${group.name}: ` }}</span>
      <span>{{ selectedValueLabel }}</span>
    </div>

    <div
      v-if="group.displayType === 'color'"
      class="flex flex-wrap gap-4 pt-2 pb-6 pl-1"
    >
      <label
        v-for="option in group.options"
        :key="option.id"
        class="aspect-square rounded-full border border-gray-300 cursor-pointer outline-offset-2 outline-1 w-6 hover:outline"
        :class="{
          'outline': selectedValue === option.id,
          'opacity-10 cursor-auto outline-none':
            selectedOptions.length > 1 &&
            !availableOptionsWithCurrentlySelectedOptions.includes(option.id),
        }"
        :style="{
          backgroundColor: option.colorHexCode,
        }"
      >
        <input
          type="radio"
          class="hidden"
          :value="option.id"
          v-model="selectedValue"
        />
      </label>
    </div>

    <!-- <div
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
    </div> -->

    <div
      v-if="group.displayType === 'text'"
      class="flex flex-wrap gap-4 pt-2 pb-6"
    >
      <label
        v-for="option in group.options"
        :key="option.id"
        class="border-1 border border-black w-12 flex items-center justify-center cursor-pointer"
        :class="{
          'bg-black text-white': selectedValue === option.id,
          'opacity-10 cursor-auto outline-none':
            selectedOptions.length > 1 &&
            !availableOptionsWithCurrentlySelectedOptions.includes(option.id),
        }"
      >
        <span>{{ option.translated.name }}</span>
        <input
          type="radio"
          class="hidden"
          :value="option.id"
          v-model="selectedValue"
        />
      </label>
    </div>
  </div>
</template>
