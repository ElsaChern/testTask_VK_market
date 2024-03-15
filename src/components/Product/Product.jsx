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
} from "./style"
import {
  decreaseAmount,
  deleteProduct,
  increaseProductAmount,
} from "../../store/slices/ProductListSlice"
import { cutFunction } from "../../helpers/cutFunc"

const Product = ({ product }) => {
  const dispatch = useDispatch()
  const [counter, setCounter] = useState(1)

  const handleIncrement = () => {
    setCounter(counter + 1)
    dispatch(increaseProductAmount(product))
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
        <Typography variant="subtitle1">
          {cutFunction(product.title, 40)}
        </Typography>
        <Description color="text.secondary" variant="body2">
          {cutFunction(product.description, 100)}
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

      <Typography width={100} variant="subtitle1">
        {product.price} руб.
      </Typography>
      <Button width={100} onClick={handleDelete}>
        <DeleteOutlineIcon fontSize="small" sx={{ color: "#ffffff" }} />
      </Button>
    </ProductCard>
  )
}

export default Product
