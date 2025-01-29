import { createSlice } from "@reduxjs/toolkit";
import data from "./data.js";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: data
    },
    reducers: {
        incrementProduct: (state, action) => {
            const product = state.products[action.payload];
            if (product) {
                product.cartCount = (product.cartCount || 0) + 1;
            }
        },
        decrementProduct: (state, action) => {
            const product = state.products[action.payload];
            if (product && product.cartCount > 0) {
                product.cartCount -= 1;
            }
        }
    }
});

export const { incrementProduct, decrementProduct } = productsSlice.actions;
export default productsSlice.reducer;