<script setup>
  const route = useRoute();

  const { data, pending } = useLazyAsyncData(
    "productCsr",
    () =>
      $fetch(
        `http://127.0.0.1:8000/products/${route.params.id}?type=productprice`
      ),
    {
      dedupe: "defer",
      server: false,
    }
  );
</script>

<template>
  <ClientOnly>
    <div class="h-8">{{ data?.price }}</div>

    <template #fallback>
      <div class="bg-slate-200 w-full h-8 animate-pulse" />
    </template>
  </ClientOnly>
</template>
