import type { ImageSize } from "@localTypes/ImageSize";
import type { Breadcrumb } from "./Breadcrumbs";

export interface Product {
  id: string;
  name: string;
  images: ProductImage[];
  shortSpecification: ProductSpecificationEntry[];
  energyClass: ProductEnergyClasses;
  energyClassCardLink: string;
  badges: ProductBadge[];
  reviews: ProductReviews;
  breadcrumbs: Breadcrumb[];
  additionalServices: ProductAdditionalServiceItem[];
  variationGroups: ProductVariationPossibleGroups[];
}

export interface ProductDynamic {
  price: string;
  priceBeforeDiscount: string;
  bestPrice: string;
  availableAmount: string;
}

export type ProductImage = {
  alt: string;
  sizes: Record<ImageSize | "original", string | null | undefined>;
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

export type ProductAdditionalServiceItem = {
  name: string;
  linkToDetails: string;
};

// export type ProductVariationGroup = {
//   groupType: "swatches" | "images" | "texts";
//   groupLabel: string;
//   groupName: string;
//   showLabel: boolean;
//   options:
//     | ProductVariationOptionText[]
//     | ProductVariationOptionImage[]
//     | ProductVariationOptionSwatch[];
// };

// export type ProductVariationOptionText = {
//   label: string;
//   value: string;
// };

// export type ProductVariationOptionImage = {
//   label: string;
//   value: string;
//   image: string;
//   alt: string;
// };

// export type ProductVariationOptionSwatch = {
//   label: string;
//   value: string;
//   color: string;
// };

export type ProductVariationOptionText = {
  label: string;
  value: string;
};

export type ProductVariationOptionImage = {
  label: string;
  value: string;
  image: string;
  alt: string;
};

export type ProductVariationOptionSwatch = {
  label: string;
  value: string;
  color: string;
};

type GroupTypeToOption<T extends "color" | "image" | "text"> = T extends "color"
  ? ProductVariationOptionSwatch
  : T extends "image"
  ? ProductVariationOptionImage
  : T extends "text"
  ? ProductVariationOptionText
  : never;

export type ProductVariationGroupWithType<
  T extends "color" | "image" | "text"
> = {
  groupType: T;
  groupLabel: string;
  groupName: string;
  showLabel: boolean;
  options: GroupTypeToOption<T>[];
};

export type ProductVariationPossibleGroups =
  | ProductVariationGroupWithType<"color">
  | ProductVariationGroupWithType<"image">
  | ProductVariationGroupWithType<"text">;
