import { Typography } from "@mui/material"
import { CheckedProducts, CheckedProductsText, TotalWrapper } from "./styles"
import { useSelector } from "react-redux"

const Total = () => {
  const { products } = useSelector((state) => state.products)

  return (
    <TotalWrapper>
      <Typography variant="subtitle1">Итого: 0 руб.</Typography>
      <CheckedProducts>
        {products.map((product) => {
          return (
            <CheckedProductsText>
              - {product.title.slice(0, 15)} 0 штук {product.price} руб.
            </CheckedProductsText>
          )
        })}
      </CheckedProducts>
    </TotalWrapper>
  )
}

export default Total
