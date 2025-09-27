import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserType} from "../types/types";

interface UserState {
  current: UserType | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  current: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk("user/fetch", async () => {
  return new Promise<UserType>((resolve) => {
    setTimeout(
      () =>
        resolve({
          id: 1,
          name: "Иван Иванов",
          email: "ivan@example.com",
        }),
      500
    );
  });
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.current = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.current = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message ?? null;
      });
  },
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
