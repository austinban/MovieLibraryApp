import React, { useState } from 'react'

import { Movie } from '../../types/movie'
import { useAddFavorites as addFavorite } from '../../hooks/useManageFavorites'
import Modal from '../Modal'

import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

interface OwnProps {
  movie?: Movie
  loading?: boolean
}

export default function MovieCard({ movie, loading }: OwnProps) {
  const [showModal, setShowModal] = useState(false)
  const hasPoster = movie?.Poster !== 'N/A'

  console.log({ movie })

  if (loading || !movie) {
    return <div className={cx('skeleton')} />
  }

  const renderMovieDetailsModal = () => {
    return (
      <div
        className={cx('movieDetails')}
        style={{ backgroundImage: `url(${movie?.Poster})` }}
      >
        <div className={cx('movieDetailsShade')}>
          <div className={cx('movieDetailsContent')}>
            <div className={cx('hero')}>{movie.Title}</div>
            <div className={cx('subHero')}>{movie.Plot}</div>
            <button onClick={() => addFavorite(movie)}>Add to favorites</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        key={movie.imdbID}
        className={cx('card')}
        onClick={() => setShowModal(!showModal)}
      >
        {hasPoster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className={cx('title')}>{movie.Title}</div>
        )}
      </div>
      <Modal isVisible={showModal} toggleModal={() => setShowModal(!showModal)}>
        {renderMovieDetailsModal()}
      </Modal>
    </>
  )
}
