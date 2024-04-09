import { configureStore } from "@reduxjs/toolkit";
import filter from "./Slices/filterSlice.js";
import cart from "./Slices/cartSlice.js";

export const store = configureStore({
  reducer: {
    filter,
    cart,
  },
});
