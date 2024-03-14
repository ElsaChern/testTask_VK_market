import { createSlice } from "@reduxjs/toolkit"

const ProductListSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    error: false,
    isLoading: false,
  },

  reducers: {
    setProductPending(state) {
      state.isLoading = true
    },

    setProductSuccess(state, action) {
      state.isLoading = false
      state.products = action.payload
    },

    setProductFailure(state) {
      state.isLoading = false
      state.error = true
    },
  },
})

export const { setProductPending, setProductSuccess, setProductFailure } =
  ProductListSlice.actions
export default ProductListSlice.reducer
