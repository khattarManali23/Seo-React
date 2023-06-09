import { useQuery } from '@tanstack/react-query'
import api from './api'

export const useGetAllSubCategories = () => {
  const { data, isError, isLoading } = useQuery(
    ['_getAllSubCategories'],
    () => api.get('subcategory/list/'),
    { enabled: true }
  )
  return {
    data: data?.data,
    isLoading,
    isError,
  }
}

export const useGetSubCategoryById = (slugs) => {
  const { data, isError, isLoading } = useQuery(
    ['_getOneSubCategoryById', slugs],
    () => api.get(`/subcategory/${slugs}`),
    { enabled: slugs ? true : false }
  )
  return {
    data: data?.data?.subsubcategory,
    isLoading,
    isError,
  }
}

export const useGetAllOthersProductByCategory = (id) => {
  const { data, isError, isLoading } = useQuery(
    ['_getAllOthersProductByCategory'],
    () => api.get(`/product/subcategoryProductCount/${id}`),
    { enabled: id ? true : false }
  )
  return {
    data: data?.data?.product,
    isLoading,
    isError,
  }
}
