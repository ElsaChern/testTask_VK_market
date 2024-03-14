import styled from "@emotion/styled"
import { Box, Card, Typography } from "@mui/material"

const Title = styled(Typography)({
  margin: "15px",
})

const MainContainer = styled(Box)({
  display: "flex",
  padding: "15px",
})

const CardContainer = styled(Card)({
  borderRadius: "10px",
})

export { Title, MainContainer, CardContainer }
