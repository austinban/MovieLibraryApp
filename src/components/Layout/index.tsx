import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { useLocation } from 'react-router-dom'

import Navbar from 'components/Navbar'

import styles from './index.module.css'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

export default function Layout() {
  const location = useLocation()
  const isSearch = location.pathname === '/'

  return (
    <>
      <Navbar hideNavBar={isSearch} />
      <div className={cx('content')}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  )
}
