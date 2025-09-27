import {useDispatch} from "react-redux";
import {addToCart} from "../../store/cartSlice";
import {ProductType} from "../../types/types";
import {AppDispatch} from "../../store";

interface ProductCardProps {
  product: ProductType;
}

function ProductCard({product}: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">${product.price}</div>
      <button onClick={handleAddToCart}>Добавить в корзину</button>
    </div>
  );
}

export default ProductCard;
