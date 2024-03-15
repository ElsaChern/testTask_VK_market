import { useState } from "react"
import { useDispatch } from "react-redux"
import { Button, Typography } from "@mui/material"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import {
  CartImg,
  CounterButton,
  CounterGroup,
  Description,
  ProductCard,
  ProductCounter,
  ProductInfo,
  Title,
} from "./style"
import {
  decreaseAmount,
  deleteProduct,
  increaseAmount,
} from "../../store/slices/ProductListSlice"

const Product = ({ product }) => {
  const dispatch = useDispatch()
  const [counter, setCounter] = useState(1)

  const handleIncrement = () => {
    setCounter(counter + 1)
    dispatch(increaseAmount(product))
  }

  const handleDecrement = () => {
    setCounter(counter - 1)
    dispatch(decreaseAmount(product))
  }

  const handleDelete = () => {
    dispatch(deleteProduct(product))
  }

  return (
    <ProductCard>
      <CartImg component="img" alt="product image" image={product.image} />
      <ProductInfo>
        <Title variant="subtitle1">{product.title}</Title>
        <Description color="text.secondary" variant="body2">
          {product.description}
        </Description>
      </ProductInfo>

      <ProductCounter>
        <CounterGroup
          size="small"
          variant="contained"
          aria-label="Small button group"
        >
          <CounterButton disabled={counter === 1} onClick={handleDecrement}>
            -
          </CounterButton>
          <CounterButton disabled>{counter}</CounterButton>
          <CounterButton disabled={counter === 10} onClick={handleIncrement}>
            +
          </CounterButton>
        </CounterGroup>
      </ProductCounter>

      <Typography variant="subtitle1">{product.price} руб.</Typography>
      <Button onClick={handleDelete}>
        <DeleteOutlineIcon fontSize="small" sx={{ color: "#ffffff" }} />
      </Button>
    </ProductCard>
  )
}

export default Product
