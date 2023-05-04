import { useQuery } from '@tanstack/react-query'
import api from './api'

export const useGetAllBanners = () => {
  const { data, isError, isLoading } = useQuery(
    ['_getAllBanners'],
    () => api.get('banner/list'),
    { enabled: true }
  )
  return {
    data: data?.data?.data,
    isLoading,
    isError,
  }
}

export const useGetBannerById = (id) => {
  const { data, isError, isLoading } = useQuery(
    ['_getBannerById'],
    () => api.get(`/banner/${id}`),
    { enabled: id ? true : false }
  )
  return {
    data: data?.data,
    isLoading,
    isError,
  }
}
