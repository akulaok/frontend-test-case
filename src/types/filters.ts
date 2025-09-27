export type Category = "all" | "phones" | "laptops" | "tablets";
export type SortOption = "name" | "price";

export const CATEGORY_LABELS: Record<Category, string> = {
  all: "Все категории",
  phones: "Телефоны",
  laptops: "Ноутбуки",
  tablets: "Планшеты",
};

export const SORT_LABELS: Record<SortOption, string> = {
  name: "По названию",
  price: "По цене",
};
