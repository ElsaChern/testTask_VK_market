import { createSlice } from "@reduxjs/toolkit"

const ProductListSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    error: false,
    isLoading: false,
    productsInCart: [],
    totalPrice: 0,
  },

  reducers: {
    setProductPending(state) {
      state.isLoading = true
    },

    setProductSuccess(state, action) {
      state.isLoading = false
      state.products = action.payload
      state.productsInCart = action.payload.map((product) => ({
        ...product,
        quantity: 1,
      }))
      const priceArr = state.productsInCart.map((product) => product.price)
      state.totalPrice = priceArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      )
    },

    setProductFailure(state) {
      state.isLoading = false
      state.error = true
    },

    increaseProductAmount: (state, action) => {
      const cartProduct = state.productsInCart.find(
        (item) => item.id === action.payload.id,
      )
      cartProduct.quantity++
      state.totalPrice += cartProduct.price
    },
    decreaseAmount: (state, action) => {
      const cartProduct = state.productsInCart.find(
        (item) => item.id === action.payload.id,
      )
      cartProduct.quantity--
      state.totalPrice -= cartProduct.price
    },
    deleteProduct: (state, action) => {
      const cartProduct = state.productsInCart.find(
        (item) => item.id === action.payload.id,
      )
      state.products = state.products.filter(
        (cartItem) => cartItem.id !== action.payload.id,
      )
      state.productsInCart = state.productsInCart.filter(
        (cartItem) => cartItem.id !== action.payload.id,
      )
      state.totalPrice -= cartProduct.price * cartProduct.quantity
    },
  },
})

export const {
  setProductPending,
  setProductSuccess,
  setProductFailure,
  increaseProductAmount,
  decreaseAmount,
  deleteProduct,
} = ProductListSlice.actions
export default ProductListSlice.reducer
