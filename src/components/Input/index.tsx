import React, { useState } from 'react'

import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

interface OwnProps extends React.InputHTMLAttributes<HTMLInputElement> {
  setValue: (value: string) => void
}

const Input = (props: OwnProps) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div>
      <input
        className={cx('input')}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/search${
            isFocused ? '' : 'Dark'
          }.svg)`,
        }}
        type="text"
        placeholder="Search"
        onChange={(e) => props.setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </div>
  )
}

export default Input
