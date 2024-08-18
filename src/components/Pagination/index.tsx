import React from 'react'

import { Movie } from '../../types/movie'
import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

interface OwnProps {
  totalResults: number
  page: number
  setPage: (page: number) => void
}

export default function Pagination({ totalResults, setPage, page }: OwnProps) {
  if (!totalResults) return null

  const totalPages = Math.ceil(totalResults / 10)
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const getPageRange = () => {
    const end = page * 10 > totalResults ? totalResults : page * 10

    return `${page * 10 - 9}-${end}`
  }

  const getLimitedPageNumbers = () => {
    const maxPages = 9
    const half = Math.floor(maxPages / 2)
    const start = page - half
    const end = page + half

    if (start < 1) {
      return pages.slice(0, maxPages)
    }

    if (end > totalPages) {
      return pages.slice(totalPages - maxPages, totalPages)
    }

    return pages.slice(start - 1, end)
  }

  const renderPageButton = (p: number) => {
    return (
      <div
        className={cx('page', { active: p === page })}
        key={p}
        onClick={() => {
          setPage(p)
        }}
      >
        {p}
      </div>
    )
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('pages')}>
        <div
          className={cx('page', { disabled: page === 1 })}
          onClick={() => setPage(page - 1)}
        >
          <img
            className={cx('rotate')}
            src={process.env.PUBLIC_URL + '/chevron.svg'}
          />
        </div>

        {getLimitedPageNumbers()[0] !== 1 && (
          <>
            {renderPageButton(1)} <div className={cx('ellipse')}>...</div>
          </>
        )}

        {getLimitedPageNumbers().map((p) => renderPageButton(p))}

        {getLimitedPageNumbers().slice(-1)[0] !== totalPages && (
          <>
            <div className={cx('ellipse')}>...</div>{' '}
            {renderPageButton(totalPages)}
          </>
        )}

        <div
          className={cx('page', { disabled: page === totalPages })}
          onClick={() => setPage(page + 1)}
        >
          <img src={process.env.PUBLIC_URL + '/chevron.svg'} />
        </div>
      </div>

      <div className={cx('summary')}>
        {getPageRange()} of {totalResults} results
      </div>
    </div>
  )
}
