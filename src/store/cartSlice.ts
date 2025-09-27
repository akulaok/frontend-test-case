import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartItemType, ProductType} from "../types/types";

interface cartState {
  items: CartItemType[];
}

const initialState: cartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({...product, quantity: 1});
      }
    },
    removeFromCart: (state, action:PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const {id, quantity} = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {addToCart, removeFromCart, updateQuantity, clearCart} =
  cartSlice.actions;
export default cartSlice.reducer;
