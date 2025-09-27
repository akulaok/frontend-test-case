import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ProductType} from "../types/types";
import {mockProducts} from "../mocks";

interface ProductsState {
  items: ProductType[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  return new Promise<ProductType[]>((resolve) => {
    setTimeout(() => resolve(mockProducts), 1000);
  });
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message ?? null;
      });
  },
});

export default productsSlice.reducer;
