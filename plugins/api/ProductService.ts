import type { Product } from "@localTypes/Product";

export default class ProductService {
  private static instance: ProductService | null = null;
  private apiBaseUrl: string;

  constructor() {
    this.apiBaseUrl = (useRuntimeConfig().public.apiBaseUrl as string) ?? "";
  }

  public static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  async getProduct() {
    const route = useRoute();
    const id = route.params.id as string;

    return await useAsyncData<Product>(
      `product-${id}`,
      () => $fetch(`${this.apiBaseUrl}/products/${id}`),
      {
        dedupe: "cancel",
      }
    );
  }

  async getProductDynamic(id: string) {
    return await useAsyncData<Product>(
      `product-${id}`,
      () => $fetch(`${this.apiBaseUrl}/products/${id}/dynamic`),
      {
        dedupe: "cancel",
      }
    );
  }
}
