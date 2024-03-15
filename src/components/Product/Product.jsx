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
import { useState } from "react"
import { useDispatch } from "react-redux"
import {
  addProduct,
  decreaseAmount,
  deleteProduct,
  increaseAmount,
} from "../../store/slices/Cart"

const Product = ({ product }) => {
  const dispatch = useDispatch()
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter + 1)
    counter === 0
      ? dispatch(addProduct(product))
      : dispatch(increaseAmount(product))
  }

  const handleDecrement = () => {
    setCounter(counter - 1)
    dispatch(decreaseAmount(product))
  }

  const handleDelete = () => {
    dispatch(deleteProduct(product))
    setCounter(0)
  }

  return (
    <ProductCard>
      <CartImg component="img" alt="product image" image={product.image} />
      <ProductInfo>
        <Typography variant="subtitle1">
          {product.title.length > 40
            ? `${product.title.slice(0, 30)}...`
            : product.title}
        </Typography>
        <Description color="text.secondary" variant="body2">
          {product.description.length > 100
            ? `${product.description.slice(0, 100)}...`
            : product.description}
        </Description>
      </ProductInfo>

      <ProductCounter>
        <CounterGroup
          size="small"
          variant="contained"
          aria-label="Small button group"
        >
          <CounterButton disabled={counter === 0} onClick={handleDecrement}>
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
