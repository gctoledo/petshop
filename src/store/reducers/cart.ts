import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../types";

type CartState = {
  itens: Product[];
};

const initialState: CartState = {
  itens: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const newProduct = action.payload;
      if (state.itens.find((product) => product.id === newProduct.id)) {
        const indexItem = state.itens.findIndex(
          (item) => item.id === newProduct.id
        );
        state.itens[indexItem].amount = state.itens[indexItem].amount + 1;
        state.itens[indexItem].totalPrice =
          state.itens[indexItem].totalPrice + state.itens[indexItem].price;
      } else {
        const productAmount = {
          ...newProduct,
          amount: 1,
          totalPrice: newProduct.price,
        };
        state.itens.push(productAmount);
      }
    },

    remove: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      const itemIndex = state.itens.findIndex((item) => item.id === product.id);

      if (state.itens[itemIndex].amount > 1) {
        state.itens[itemIndex].amount = state.itens[itemIndex].amount - 1;
        state.itens[itemIndex].totalPrice =
          state.itens[itemIndex].totalPrice - state.itens[itemIndex].price;
        return;
      }

      state.itens = state.itens.filter((item) => item.id !== product.id);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
