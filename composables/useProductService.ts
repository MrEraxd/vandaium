import type {
  ShopwareProduct,
  ShopwareProductSimplified,
  ShopwareProductVariant,
} from "@localTypes/ShopwareProduct";

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

  async function getProductDynamic() {
    const route = useRoute();
    const id = route.params.id as string;

    return await useAsyncData<ShopwareProductSimplified>(
      `product-dynamic-${id}`,
      () =>
        $fetch(`${apiBaseUrl}/product/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "sw-access-key": swApiToken,
          },
          body: {
            includes: {
              product: ["calculatedPrice"],
            },
          },
        }),
      {
        dedupe: "cancel",
        server: false,
      }
    );
  }

  async function getProductAvailableVariants() {
    const route = useRoute();
    const id = route.params.id as string;

    return await useAsyncData<{ elements: ShopwareProductVariant[] }>(
      `product-variants-${id}`,
      () =>
        $fetch(`${apiBaseUrl}/product`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "sw-access-key": swApiToken,
          },
          body: {
            includes: {
              product: ["stock", "optionIds", "propertyIds", "id"],
            },
            filter: [
              {
                type: "equals",
                field: "product.parentId",
                value: id,
              },
              {
                type: "range",
                operator: "and",
                field: "product.stock",
                parameters: {
                  gt: 0,
                },
              },
            ],
          },
        }),
      {
        dedupe: "cancel",
        server: false,
      }
    );
  }

  return { getProduct, getProductDynamic, getProductAvailableVariants };
}
