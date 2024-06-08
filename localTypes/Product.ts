import type { ImageSize } from "@localTypes/ImageSize";

export interface Product {
  id: string;
  name: string;
  images: ProductImage[];
}

export type ProductImage = {
  alt: string;
  sizes: Record<ImageSize, string | null | undefined>;
};
