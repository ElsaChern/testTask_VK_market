import { configureStore } from "@reduxjs/toolkit"
import ProductListSlice from "./slices/ProductListSlice"

export default configureStore({
  reducer: {
    products: ProductListSlice,
  },
})
