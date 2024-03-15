import styled from "@emotion/styled"
import { Box, Card, Typography } from "@mui/material"

const TotalWrapper = styled(Card)({
  display: "flex",
  padding: "10px",
  borderRadius: "10px",
  minHeight: "400px",
  flexDirection: "column",
})

const CheckedProductsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  margin: "10px 0",
})

const CheckedProducts = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "5px",
  borderBottom: "1px solid #f2f3f4",
})

const CheckedProductsTitle = styled(Typography)({
  fontSize: "13px",
  width: "170px",
})

const CheckedProductsText = styled(Typography)({
  fontSize: "14px",
})

export {
  TotalWrapper,
  CheckedProductsWrapper,
  CheckedProducts,
  CheckedProductsText,
  CheckedProductsTitle,
}
