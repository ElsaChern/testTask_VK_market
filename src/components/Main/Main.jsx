import { Grid } from "@mui/material"
import { MainContainer, Title } from "./slyled"
import ProductList from "../ProductList/ProductList"
import Total from "../Total/Total"

const MainComponent = () => {
  return (
    <>
      <Title variant="h6">Корзина</Title>
      <MainContainer>
        <Grid container columns={4} spacing={1}>
          <Grid item xs={3}>
            <ProductList />
          </Grid>
          <Grid item xs={1}>
            <Total />
          </Grid>
        </Grid>
      </MainContainer>
    </>
  )
}

export default MainComponent
