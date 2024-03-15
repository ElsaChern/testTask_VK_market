import { configureStore } from "@reduxjs/toolkit"
import ProductListSlice from "./slices/ProductListSlice"
import Cart from "./slices/Cart"

export default configureStore({
  reducer: {
    products: ProductListSlice,
    cart: Cart,
  },
})
