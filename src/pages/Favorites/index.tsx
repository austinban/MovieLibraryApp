import React from 'react'

import FadeIn from '../../components/FadeIn'
import MovieCard from '../../components/MovieCard'
import { useGetFavorites as getFavorites } from '../../hooks/useManageFavorites'

import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

interface FavoriteMovieCardProps {
  id: string
}

export default function Favorites() {
  const favorites = getFavorites()

  const renderStateMessage = (message: string) => {
    return (
      <FadeIn>
        <div className={cx('stateMessage')}>{message}</div>
      </FadeIn>
    )
  }

  const renderMovies = () => {
    if (favorites.length === 0) return renderStateMessage('No favorites found')

    return (
      <div className={cx('grid')}>
        {favorites.map((movie) => (
          <FadeIn key={movie.imdbID}>
            <MovieCard movie={movie} />
          </FadeIn>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h2>Favorites</h2>
      {renderMovies()}
    </div>
  )
}
