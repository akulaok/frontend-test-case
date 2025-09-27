import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  selectCartCount,
  selectCartItems,
  selectCartTotalPrice,
} from "../../selectors/selectors";
import {clearCart} from "../../store/cartSlice";
import CartItem from "../CartItem/CartItem";
import {AppDispatch} from "../../store";

function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const totalPrice = useSelector(selectCartTotalPrice);

  const [isOpen, setIsOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    setShowCheckout(true);
    setTimeout(() => {
      alert("Заказ оформлен!");
      dispatch(clearCart());
      setShowCheckout(false);
      setIsOpen(false);
    }, 1000);
  };

  return (
    <div className="cart">
      <button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
        Корзина ({cartCount})
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <h3>Корзина</h3>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p>Корзина пуста</p>
            ) : (
              cartItems.map((item) => <CartItem key={item.id} item={item} />)
            )}
          </div>

          <div className="cart-footer">
            <div className="total">Итого: ${totalPrice}</div>
            <button
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={cartItems.length === 0 || showCheckout}
            >
              {showCheckout ? "Оформляем..." : "Оформить заказ"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
