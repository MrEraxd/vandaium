<script setup>
  const route = useRoute();
  const quantity = ref(1);

  const { data } = useAsyncData(
    "productSsr",
    () => $fetch(`http://127.0.0.1:8000/products/${route.params.id}`),
    {
      dedupe: "defer",
    }
  );

  function addToCart() {
    console.log("Adding to cart", data.value.name, quantity.value);
  }
</script>

<template>
  <div>
    <TheBreadcrumbs />

    <div class="grid grid-cols-2 gap-2">
      <div class="grid gap-2 grid-cols-2">
        <NuxtImg
          v-for="(img, index) in data?.images"
          :key="img + index"
          :class="index === 0 ? 'col-span-2' : 'col-span-1'"
          :src="`/images/${img}`"
        />
      </div>

      <div>
        <h1 class="text-xl font-semibold">{{ data?.name }}</h1>

        <div class="grid grid-cols-2">
          <div>
            <div
              v-for="([key, value], index) in Object.entries(
                data?.specification
              )"
              :key="key + index"
              class="grid grid-cols-2 gap-2"
            >
              <span>{{ key }}</span>
              <span>{{ value }}</span>
            </div>
          </div>

          <div class="flex flex-col">
            <ProductPrice />

            <div>
              <select v-model="quantity">
                <option
                  v-for="(_, index) in Array(9)"
                  :key="index"
                  :value="index + 1"
                  :selected="index === 0"
                >
                  {{ index + 1 }}
                </option>
              </select>

              <button
                @click="addToCart"
                class="bg-teal-100 py-2 rounded"
              >
                Dodaj do koszyka
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <RecommendedProducts />

    <ProductDescription />
  </div>
</template>
