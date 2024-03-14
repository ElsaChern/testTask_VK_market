import { useDispatch, useSelector } from "react-redux"
import { CardContainer, LoadingWrapper } from "./styled"
import fetchProducts from "../../api/fetchProducts"
import { useEffect } from "react"
import {
  setProductPending,
  setProductSuccess,
  setProductFailure,
} from "../../store/slices/ProductListSlice"
import { Alert, AlertTitle } from "@mui/material"

const ProductList = () => {
  const dispatch = useDispatch()

  const { products, error, isLoading } = useSelector((state) => state.products)

  useEffect(() => {
    const getProducts = async () => {
      dispatch(setProductPending())
      try {
        const prodResult = await fetchProducts()
        dispatch(setProductSuccess(prodResult))
      } catch (e) {
        dispatch(setProductFailure())
      }
    }
    getProducts()
    // eslint-disable-next-line
  }, [])

  if (error) {
    return (
      <Alert severity="error" variant="outlined">
        <AlertTitle>Ошибка</AlertTitle>
        Что-то пошло не так. Пожалуйста, попробуйте еще раз позднее
      </Alert>
    )
  }

  if (isLoading) {
    return <LoadingWrapper>Загрузка</LoadingWrapper>
  }

  return (
    <CardContainer>
      {products.map((product) => {
        return <p key={product.id}>{product.title}</p>
      })}
    </CardContainer>
  )
}

export default ProductList
