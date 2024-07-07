import type { Product } from "@localTypes/Product";

export default function () {
  const apiBaseUrl = (useRuntimeConfig().public.apiBaseUrl as string) ?? "";

  async function getProduct() {
    const route = useRoute();
    const id = route.params.id as string;

    return await useAsyncData<Product>(
      `product-${id}`,
      () => $fetch(`${apiBaseUrl}/products/${id}`),
      {
        dedupe: "cancel",
      }
    );
  }

  async function getProductDynamic(id: string) {
    return await useAsyncData<Product>(
      `product-${id}`,
      () => $fetch(`${apiBaseUrl}/products/${id}/dynamic`),
      {
        dedupe: "cancel",
      }
    );
  }

  return { getProduct, getProductDynamic };
}
