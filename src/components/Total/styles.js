import styled from "@emotion/styled"
import { Box, Card, Typography } from "@mui/material"

const TotalWrapper = styled(Card)({
  display: "flex",
  padding: "10px",
  borderRadius: "10px",
  minHeight: "400px",
  flexDirection: "column",
})

const CheckedProducts = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  margin: "10px",
})

const CheckedProductsText = styled(Typography)({
  fontSize: "14px",
})

export { TotalWrapper, CheckedProducts, CheckedProductsText }
