import React from 'react'

import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

interface OwnProps {
  children: React.ReactNode
}

export default function FadeIn({ children }: OwnProps) {
  return <div className={cx('wrapper')}>{children}</div>
}
