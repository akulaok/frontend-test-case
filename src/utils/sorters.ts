import {SortOption} from "../types/Filters";
import {ProductType} from "../types/types";

export const sorters: Record<
  SortOption,
  (a: ProductType, b: ProductType) => number
> = {
  name: (a, b) => a.name.localeCompare(b.name),
  price: (a, b) => a.price - b.price,
};
