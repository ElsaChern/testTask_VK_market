import { useDispatch, useSelector } from "react-redux"
import { CardContainer } from "./styled"
import fetchProducts from "../../api/fetchProducts"
import { useEffect } from "react"
import {
  setProductPending,
  setProductSuccess,
  setProductFailure,
} from "../../store/slices/ProductListSlice"
import Product from "../Product/Product"
import Loader from "../Loader/Loader"
import Error from "../Error/Error"

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
  }, [])

  if (error) {
    return <Error />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <CardContainer>
      {products.map((product) => {
        return <Product key={product.id} product={product} />
      })}
    </CardContainer>
  )
}

export default ProductList
