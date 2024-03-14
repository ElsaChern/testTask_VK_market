import { Button, Typography } from "@mui/material"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import RemoveIcon from "@mui/icons-material/Remove"
import AddIcon from "@mui/icons-material/Add"
import {
  CartImg,
  Description,
  ProductCard,
  ProductCounter,
  ProductInfo,
} from "./style"
import { useState } from "react"

const Product = ({ product }) => {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleDecrease = () => {
    setCount(count - 1)
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
        <RemoveIcon
          onClick={handleDecrease}
          fontSize="small"
          sx={{ color: "black" }}
        />
        {count}
        <AddIcon
          onClick={handleIncrease}
          fontSize="small"
          sx={{ color: "black" }}
        />
      </ProductCounter>

      <Typography width={100} variant="subtitle1">
        {product.price} руб.
      </Typography>
      <Button width={100}>
        <DeleteOutlineIcon fontSize="small" sx={{ color: "black" }} />
      </Button>
    </ProductCard>
  )
}

export default Product
