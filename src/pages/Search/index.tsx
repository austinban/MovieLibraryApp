import React, { KeyboardEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from '../../components/Logo'
import Input from '../../components/Input'
import { useSearchContext } from '../../contexts/searchContext'

import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

function Search() {
  const navigate = useNavigate()
  const { updateSearchTerm, searchTerm } = useSearchContext()

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigate('/movies?search=' + searchTerm)
    }
  }

  return (
    <div className={cx('wrapper')}>
      <Logo />
      <Input
        value={searchTerm}
        setValue={updateSearchTerm}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  )
}

export default Search
