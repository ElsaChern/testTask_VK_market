import styled from "@emotion/styled"
import { Box, Card, Typography } from "@mui/material"

const TotalWrapper = styled(Card)({
  display: "flex",
  padding: "10px",
  borderRadius: "10px",
  flexDirection: "column",
})

const CartProductsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  margin: "10px 0",
})

const CartProducts = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "5px",
  borderBottom: "1px solid #f2f3f4",
})

const CartProductsTitle = styled(Typography)({
  fontSize: "13px",
  width: "170px",
})

const CartProductsText = styled(Typography)({
  fontSize: "14px",
})

export {
  TotalWrapper,
  CartProductsWrapper,
  CartProducts,
  CartProductsText,
  CartProductsTitle,
}
