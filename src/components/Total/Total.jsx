import { Typography } from "@mui/material"
import {
  CheckedProducts,
  CheckedProductsText,
  CheckedProductsTitle,
  CheckedProductsWrapper,
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
      <CheckedProductsWrapper>
        {productsInCart.map((product) => {
          if (product.quantity !== 0) {
            return (
              <CheckedProducts key={product.id}>
                <CheckedProductsTitle>{product.title}</CheckedProductsTitle>
                <CheckedProductsText>
                  {product.quantity} шт.
                </CheckedProductsText>
                <CheckedProductsText>
                  {(product.price * product.quantity).toFixed(2)} руб.
                </CheckedProductsText>
              </CheckedProducts>
            )
          }
        })}
      </CheckedProductsWrapper>
    </TotalWrapper>
  )
}

export default Total
