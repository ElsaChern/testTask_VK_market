import styled from "@emotion/styled"
import { Box, Card } from "@mui/material"

const CardContainer = styled(Card)({
  borderRadius: "10px",
  padding: "0 15px",
})

const LoadingWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  padding: "50px",
})

export { CardContainer, LoadingWrapper }
