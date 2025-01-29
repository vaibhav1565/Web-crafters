import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

const appStore = configureStore({
    reducer: {
        products: productsReducer, // Ensure this matches the imported name
    },
});

export default appStore;