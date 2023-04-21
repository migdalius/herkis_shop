import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      let found = false;
      state.products.forEach((item) => {
        if (item._id === action.payload._id) {
          found = true;
          item.quantity = item.quantity + action.payload.quantity;
        }
      });
      //if it is a new product
      if (!found) {
        state.products.push(action.payload);
      }
      //update the total quantity and total price of products in basket
      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      state.quantity -= action.payload.quantity;
      state.products = state.products.filter(
        (prod) => prod._id !== action.payload._id
      );
      //it has changed
      state.total -= action.payload.price * action.payload.quantity;
    },
    emptyBasket: (state, action) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, emptyBasket } = cartSlice.actions;
export default cartSlice.reducer;
