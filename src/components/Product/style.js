import styled from "@emotion/styled"
import { Box, Card, CardMedia, Typography } from "@mui/material"

const ProductCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: "10px 0",
  padding: "10px 0",
  backgroundColor: "#42424269",
  justifyContent: "space-around",
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
}))

const CartImg = styled(CardMedia)({
  width: "70px",
  height: "75px",
  borderRadius: "10px",
  objectFit: "fill",
})

const ProductInfo = styled(Box)({
  width: "450px",
  flexWrap: "wrap",
})

const Description = styled(Typography)({
  fontSize: "12px",
  fontStyle: "italic",
})

const ProductCounter = styled(Box)({
  display: "flex",
  width: "85px",
  height: "25px",
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  justifyContent: "space-between",
  padding: "0 2px",
  alignItems: "center",
  color: "black",
})

export { ProductCard, CartImg, ProductInfo, Description, ProductCounter }
