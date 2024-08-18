import { useQuery } from '@tanstack/react-query'

import { Movie } from '../types/movie'

export default function useGetById(id: string): {
  isPending: boolean
  error: any
  data?: Movie
} {
  const { isPending, error, data } = useQuery({
    queryKey: ['getById', id],
    queryFn: () =>
      fetch(`http://www.omdbapi.com/?i=${id}&plot=long&apikey=d15d95d`).then(
        (res) => res.json(),
      ),
  })

  return { isPending, error, data }
}
