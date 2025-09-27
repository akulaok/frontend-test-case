import {Category, SortOption} from "../types/Filters";
import {ProductType} from "../types/types";
import {sorters} from "./sorters";

export const getFilteredProducts = (
  products: ProductType[],
  searchTerm: string,
  selectedCategory: Category,
  sortBy: SortOption
): ProductType[] => {
  const normalizedSearch = searchTerm.toLowerCase();

  return products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(normalizedSearch);
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort(sorters[sortBy]);
};
