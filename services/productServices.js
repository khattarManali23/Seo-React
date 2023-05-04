import { useQuery } from '@tanstack/react-query'
import api from './api'

export const useGetAllProducts = (userType) => {
  const { data, isError, isLoading } = useQuery(
    ['_getAllProducts'],
    () => api.get(`/product/all/${userType}`),
    { enabled: true }
  )
  return {
    data: data?.data?.product,
    isLoading,
    isError,
  }
}

export const useGetAllProductsByAnyCategoryById = (id) => {
  const { data, isError, isLoading } = useQuery(
    ['_getAllProductsByCategoryById', id],
    () => api.get(`product/customer/list/${id}`),
    { enabled: id ? true : false }
  )
  return {
    data: data?.data?.products,
    isLoading,
    isError,
  }
}

export const useGetProductById = (productSlug) => {
  const { data, isError, isLoading, isSuccess } = useQuery(
    ['_getOneProductById', productSlug],
    () => api.get(`/product/get/${productSlug}`),
    { enabled: productSlug ? true : false }
  )

  return {
    data: data?.data?.data,
    isLoading,
    isError,
    isSuccess,
  }
}

export const useGetAllFilteredProducts = (url) => {
  const { data, isError, isLoading } = useQuery(
    ['_getAllProducts', url],
    () => api.get(url),
    { enabled: url ? true : false }
  )
  return {
    data: data?.data?.product,
    isLoading,
    isError,
  }
}
