import { Typography } from "@mui/material"
import { CheckedProducts, CheckedProductsText, TotalWrapper } from "./styles"
import { useSelector } from "react-redux"

const Total = () => {
  const { productsInCart, totalPrice } = useSelector((state) => state.cart)

  return (
    <TotalWrapper>
      <Typography variant="subtitle1">
        Итого: {totalPrice.toFixed(2)} руб.
      </Typography>
      <CheckedProducts>
        {productsInCart.map((product) => {
          if (product.quantity !== 0) {
            return (
              <CheckedProductsText key={product.id}>
                &#10003; {product.title.slice(0, 15)} {product.quantity} шт.
                {(product.price * product.quantity).toFixed(2)} руб.
              </CheckedProductsText>
            )
          }
        })}
      </CheckedProducts>
    </TotalWrapper>
  )
}

export default Total
