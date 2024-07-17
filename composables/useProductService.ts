import type { ShopwareProduct } from "@localTypes/ShopwareProduct";

export default function () {
  const apiBaseUrl = (useRuntimeConfig().public.apiBaseUrl as string) ?? "";
  const swApiToken = (useRuntimeConfig().public.swApiToken as string) ?? "";

  async function getProduct() {
    const route = useRoute();
    const id = route.params.id as string;

    return await useAsyncData<ShopwareProduct>(
      `product-${id}`,
      () =>
        $fetch(`${apiBaseUrl}/product/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "sw-access-key": swApiToken,
          },
          body: {
            includes: {
              product: ["id", "translated", "name", "categoryTree", "media"],
            },
            associations: {
              media: {},
            },
          },
        }),
      {
        dedupe: "cancel",
      }
    );
  }

  async function getProductDynamic(id: string) {
    return await useAsyncData<ShopwareProduct>(
      `product-dynamic-${id}`,
      () => $fetch(`${apiBaseUrl}/products/${id}/dynamic`),
      {
        dedupe: "cancel",
      }
    );
  }

  return { getProduct, getProductDynamic };
}
