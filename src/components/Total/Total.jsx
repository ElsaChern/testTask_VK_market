import { Typography } from "@mui/material"
import {
  CartProducts,
  CartProductsText,
  CartProductsTitle,
  CartProductsWrapper,
  TotalWrapper,
} from "./styles"
import { useSelector } from "react-redux"

const Total = () => {
  const { productsInCart, totalPrice } = useSelector((state) => state.products)

  return (
    <TotalWrapper>
      <Typography variant="h6">
        Итого: {Math.abs(totalPrice.toFixed(2))} руб.
      </Typography>
      <CartProductsWrapper>
        {productsInCart.map((product) => {
          return (
            <CartProducts key={product.id}>
              <CartProductsTitle>{product.title}</CartProductsTitle>
              <CartProductsText>{product.quantity} шт.</CartProductsText>
              <CartProductsText>
                {(product.price * product.quantity).toFixed(2)} руб.
              </CartProductsText>
            </CartProducts>
          )
        })}
      </CartProductsWrapper>
    </TotalWrapper>
  )
}

export default Total
