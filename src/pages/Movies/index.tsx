import React, { useState } from 'react'

import useSearch from '../../hooks/useSearch'
import FadeIn from '../../components/FadeIn'
import MovieCard from '../../components/MovieCard'
import Pagination from '../../components/Pagination'
import { useSearchContext } from '../../contexts/searchContext'

import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

export default function Movies() {
  const [page, setPage] = useState(1)
  const { updateSearchTerm, searchTerm } = useSearchContext()
  const results = useSearch(searchTerm, page)

  const movies = results?.data?.Search || []

  console.log({ movies })

  const renderSkeletonLoading = () => {
    return (
      <div className={cx('grid')}>
        {Array.from({ length: 10 }).map((_, index) => (
          <MovieCard loading />
        ))}
      </div>
    )
  }

  const renderStateMessage = (message: string) => {
    return (
      <FadeIn>
        <div className={cx('stateMessage')}>{message}</div>
      </FadeIn>
    )
  }

  const renderMovies = () => {
    if (!searchTerm) return renderStateMessage('Search for a movie')
    if (results.error) return renderStateMessage('Error fetching movies')
    if (movies.length === 0 && !results.isPending)
      return renderStateMessage('No movies found')
    if (movies.length === 0) return renderSkeletonLoading()

    return (
      <div className={cx('grid')}>
        {movies.map((movie) => (
          <FadeIn key={movie.imdbID}>
            <MovieCard movie={movie} />
          </FadeIn>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h2>Search results for "{searchTerm}"</h2>
      {renderMovies()}
      <Pagination
        totalResults={results?.data?.totalResults || 0}
        page={page}
        setPage={setPage}
      />
    </div>
  )
}
