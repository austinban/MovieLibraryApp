import React from 'react'

import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

interface OwnProps {
  isVisible?: boolean
  toggleModal?: () => void
  children: React.ReactNode
}

export default function Modal({ isVisible, toggleModal, children }: OwnProps) {
  if (!isVisible) return null

  return (
    <div className={cx('modal')} onClick={toggleModal}>
      <div className={cx('modalContent')} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
