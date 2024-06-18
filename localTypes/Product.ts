import type { ImageSize } from "@localTypes/ImageSize";

export interface Product {
  id: string;
  name: string;
  images: ProductImage[];
  shortSpecification: ProductSpecificationEntry[];
  energyClass: ProductEnergyClasses;
  energyClassCardLink: string;
  badges: ProductBadge[];
  reviews: ProductReviews;
}

export interface ProductDynamic {
  price: string;
  priceBeforeDiscount: string;
  bestPrice: string;
  availableAmount: string;
}

export type ProductImage = {
  alt: string;
  sizes: Record<ImageSize, string | null | undefined>;
};

export type ProductSpecificationEntry = {
  label: string;
  value: string;
};

export type ProductEnergyClasses = "A" | "B" | "C" | "D" | "E" | "F" | "G";

export type ProductBadge = {
  label: string;
  backgroundColor: string;
  textColor: string;
};

export type ProductReviews = {
  rating: number;
  items: ProductReviewItem[];
};

export type ProductReviewItem = {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
};
