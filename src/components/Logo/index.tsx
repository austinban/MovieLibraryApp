import React from 'react'

import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

export default function Logo() {
  return (
    <img
      src={process.env.PUBLIC_URL + '/peachflixLogo.svg'}
      alt="Peachflix Logo"
      className={cx('logo')}
    />
  )
}
