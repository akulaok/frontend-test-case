import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {mockProducts} from "../../mocks";
import {selectProducts, selectProductsLoading} from "../../selectors/selectors";
import {
  fetchProducts,
} from "../../store/productsSlice";
import Filters from "../Filters/Filters";
import {Category, SortOption} from "../../types/Filters";
import ProductCard from "../ProductCard/ProductCard";
import {AppDispatch} from "../../store";
import {getFilteredProducts} from "../../utils/getFilteredProducts";

function ProductList() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [sortBy, setSortBy] = useState<SortOption>("name");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = getFilteredProducts(
    products,
    searchTerm,
    selectedCategory,
    sortBy
  );

  if (loading) {
    return <div className="loading">Загрузка товаров...</div>;
  }

  return (
    <div className="product-list">
      <Filters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
