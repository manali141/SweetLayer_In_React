import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  category: "",
  image: "",
  price: ""
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,

  reducers: {
    updateCake(state, action) {
      return {
        ...state,
        ...action.payload
      };
    },

    resetCake() {
      return initialState;
    }
  }
});

export const { updateCake, resetCake } =
  cakeSlice.actions;

export default cakeSlice.reducer;