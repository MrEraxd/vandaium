<script setup>
  const route = useRoute();

  const { data } = useAsyncData(
    "productSsr",
    () => $fetch(`http://127.0.0.1:8000/products/${route.params.id}`),
    {
      dedupe: "defer",
    }
  );
</script>

<template>
  <div>Product description</div>
</template>
