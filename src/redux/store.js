import { configureStore } from "@reduxjs/toolkit";
import filter from "./Slices/filterSlice.js";

export const store = configureStore({
  reducer: {
    filter,
  },
});
