import ProductService from "./api/ProductService";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      api: {
        productService: ProductService.getInstance(),
      },
    },
  };
});
