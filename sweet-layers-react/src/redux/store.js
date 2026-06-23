import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cakeSlice";

export const store = configureStore({
  reducer: {
    cake: cakeReducer
  }
});