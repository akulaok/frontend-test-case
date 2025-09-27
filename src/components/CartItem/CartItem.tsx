import {useDispatch} from "react-redux";
import {CartItemType} from "../../types/types";
import {removeFromCart, updateQuantity} from "../../store/cartSlice";
import {AppDispatch} from "../../store";

interface CartItemProps {
  item: CartItemType;
}

function CartItem({item}: CartItemProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleChangeQuantity = (delta: number) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity <= 0) {
      dispatch(removeFromCart(item.id));
    } else {
      dispatch(updateQuantity({id: item.id, quantity: newQuantity}));
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        <div className="quantity-controls">
          <button onClick={() => handleChangeQuantity(-1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleChangeQuantity(1)}>+</button>
        </div>
      </div>
      <button
        className="remove-btn"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Удалить
      </button>
    </div>
  );
}

export default CartItem;
