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
      if (state.itens.find((game) => game.id === newProduct.id)) {
        alert("Jogo ja adicionado");
      } else {
        state.itens.push(newProduct);
      }
    },
  },
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;
