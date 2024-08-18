import { useQuery } from '@tanstack/react-query'

import { Movie } from '../types/movie'

export default function useSearch(
  searchString: string,
  page: number,
): {
  isPending: boolean
  error: any
  data?: {
    Response: string
    Search: Movie[]
    totalResults: number
  }
} {
  const { isPending, error, data } = useQuery({
    queryKey: ['search', searchString, page],
    queryFn: () =>
      fetch(
        `http://www.omdbapi.com/?s=${searchString}&page=${page}&apikey=d15d95d`,
      ).then((res) => res.json()),
  })

  return { isPending, error, data }
}
