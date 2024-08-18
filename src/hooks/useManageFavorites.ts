import { Movie } from '../types/movie'

export function useGetFavorites(): Movie[] {
  const favorites = localStorage.getItem('favorites')

  return favorites ? JSON.parse(favorites) : []
}

export function useAddFavorites(movie: Movie) {
  const favorites = useGetFavorites()

  if (favorites.includes(movie)) {
    return
  }

  const newFavorites = [...favorites, movie]

  localStorage.setItem('favorites', JSON.stringify(newFavorites))
}

export function useRemoveFavorites(movie: Movie) {
  const favorites = useGetFavorites()

  const newFavorites = favorites.filter((fav) => fav !== movie)

  localStorage.setItem('favorites', JSON.stringify(newFavorites))
}
