<script setup lang="ts">
  const { getProduct, getProductDynamic, getProductAvailableVariants } =
    useProductService();
  const { data: product } = await getProduct();
  const { data: productDynamic, pending } = await getProductDynamic();
  const { data: availableVariants } = await getProductAvailableVariants();

  const selectedValues = ref<string[]>([]);
  const options = reactive({
    // GroupId: SelectedOptionId
  });

  product.value?.configurator.forEach((group) => {
    const newObj = {
      [group.id]: "",
    };

    Object.assign(options, newObj);
  });

  const allAvailableOptions = computed(() => {
    const options: string[] = [];

    availableVariants?.value?.elements.forEach((elem) => {
      options.push(...elem.optionIds);
    });

    return options;
  });

  const selectedOptions = computed(() => {
    return Object.values(options)?.filter((option) => option !== "") || [];
  });

  const availableOptionsWithCurrentlySelectedOptions = computed(() => {
    const options: string[] = [];

    availableVariants?.value?.elements
      .filter((item) => {
        return item.optionIds.some((option) =>
          selectedOptions.value.includes(option)
        );
      })
      .forEach((elem) => {
        options.push(...elem.optionIds);
      });

    return options;
  });

  const quantitySelected = ref(1);
</script>

<template>
  <div
    class="flex-1 bg-white p-8 rounded-sm flex flex-col flex-shrink-0 sticky top-36"
  >
    <div class="flex justify-between items-center mb-6">
      <!-- Shopware is not supporting bages/tags by default -->
      <!-- <div>
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
      </div> -->

      <div class="flex gap-x-2 items-center ml-auto">
        <BaseSvg svg-name="icon-scale" />
        <BaseSvg svg-name="icon-add-to-wishlist" />
      </div>
    </div>

    <!-- <ProductReview
      class="mb-1"
      :rating="reviews.rating"
      :number-of-reviews="reviews.items.length"
    /> -->

    <div class="mb-10">
      <h1 class="font-medium text-xl">
        {{ product?.product.translated.name }}
      </h1>
      <!-- <div class="text-xs text-gray-300 leading-3">
        {{ `Nr katalogowy: ${catalogNumber}` }}
      </div> -->
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
          v-if="productDynamic?.product?.calculatedPrice?.totalPrice"
        >
          {{ `${productDynamic.product.calculatedPrice.totalPrice} €` }}
        </span>

        <span
          class="line-through font-medium leading-4"
          v-if="productDynamic?.product?.calculatedPrice?.listPrice?.price"
        >
          {{ `${productDynamic.product.calculatedPrice.listPrice.price} €` }}
        </span>
      </div>

      <span
        class="text-xs leading-3 text-gray-500"
        v-if="productDynamic?.product?.calculatedPrice?.regulationPrice?.price"
      >
        {{
          `Best price from last 30 days: ${productDynamic.product.calculatedPrice.regulationPrice.price} €`
        }}
      </span>
    </div>

    <!-- <ProductSizes :sizes="sizes" /> -->

    <ProductPropertyGroup
      v-for="propertyGroup in product?.configurator"
      :key="propertyGroup.name"
      :group="propertyGroup"
      :available-options="allAvailableOptions"
      :available-options-with-currently-selected-options="
        availableOptionsWithCurrentlySelectedOptions
      "
      :selected-options="selectedOptions"
      v-model="options[propertyGroup.id as keyof typeof options]"
    />

    <div class="flex flex-col gap-y-1">
      <div class="flex gap-x-2">
        <BaseSelect v-model="quantitySelected">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </BaseSelect>

        <BaseButton />
      </div>
    </div>
  </div>
</template>
