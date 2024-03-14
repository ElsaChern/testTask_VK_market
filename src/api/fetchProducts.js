import apiInstance from "./apiInstance"

const fetchUrl = "/products"

const fetchProducts = async () => {
  const response = await apiInstance.get(fetchUrl)
  return response.data
}

export default fetchProducts
