import { Grid } from "@mui/material"
import { MainContainer, CardContainer, Title } from "./slyled"

const MainComponent = () => {
  return (
    <>
      <Title variant="h6">Корзина</Title>
      <MainContainer>
        <Grid container columns={4} spacing={1}>
          <Grid item xs={3}>
            <CardContainer>Cart</CardContainer>
          </Grid>
          <Grid item xs={1}>
            <CardContainer>Sum</CardContainer>
          </Grid>
        </Grid>
      </MainContainer>
    </>
  )
}

export default MainComponent
