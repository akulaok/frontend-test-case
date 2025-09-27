import {
  Category,
  CATEGORY_LABELS,
  SORT_LABELS,
  SortOption,
} from "../../types/Filters";

interface FiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: Category;
  onCategoryChange: (value: Category) => void;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
}

function Filters({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}: FiltersProps) {
  return (
    <div className="filters">
      <div className="search">
        <input
          type="text"
          placeholder="Поиск товаров..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="filter-controls">
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value as Category)}
        >
          {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
        >
          {Object.entries(SORT_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;
