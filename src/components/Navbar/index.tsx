import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'

import Input from '../Input'
import Logo from '../Logo'
import { useSearchContext } from '../../contexts/searchContext'

import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

interface OwnProps {
  hideNavBar?: boolean
}

export default function Layout({ hideNavBar = false }: OwnProps) {
  const { updateSearchTerm, searchTerm } = useSearchContext()

  const menuItems = useMemo(
    () => [
      {
        path: '/movies',
        title: 'Movies',
      },
      {
        path: '/favorites',
        title: 'Favorites',
      },
    ],
    [],
  )

  const renderMenuItems = () => {
    return menuItems.map((item) => {
      const { title, path } = item
      return (
        <div key={title} className={cx('menuItem')}>
          <NavLink to={path}>{title}</NavLink>
        </div>
      )
    })
  }

  if (hideNavBar) return null

  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
        <NavLink to={'/'}>
          <Logo />
        </NavLink>
      </div>
      <div className={cx('menu')}>
        {renderMenuItems()}
        <Input setValue={updateSearchTerm} value={searchTerm} />
      </div>
    </div>
  )
}
