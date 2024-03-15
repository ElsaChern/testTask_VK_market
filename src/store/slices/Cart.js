import { createSlice } from "@reduxjs/toolkit"

const Cart = createSlice({
  name: "cart",
  initialState: {
    productsInCart: [],
    totalPrice: 0,
  },

  reducers: {
    addProduct: (state, action) => {
      const newProduct = { ...action.payload, quantity: 1 }
      state.productsInCart = [...state.productsInCart, newProduct]
      state.totalPrice += newProduct.price
    },
    increaseAmount: (state, action) => {
      const productInCart = state.productsInCart.find(
        (item) => item.id === action.payload.id,
      )
      productInCart.quantity++
      state.totalPrice += productInCart.price
    },
    decreaseAmount: (state, action) => {
      const productInCart = state.productsInCart.find(
        (item) => item.id === action.payload.id,
      )
      productInCart.quantity--
      state.totalPrice -= productInCart.price
    },
    deleteProduct: (state, action) => {
      const productInCart = state.productsInCart.find(
        (item) => item.id === action.payload.id,
      )
      state.productsInCart = state.productsInCart.filter(
        (cartItem) => cartItem.id !== action.payload.id,
      )
      state.totalPrice -= productInCart.price * productInCart.quantity
    },
  },
})

export const { addProduct, increaseAmount, decreaseAmount, deleteProduct } =
  Cart.actions
export default Cart.reducer
