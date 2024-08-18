import React, { lazy } from 'react'

// Lazy load components to reduce initial load time
// Lazy loaded components need to be paired with the Suspense component which can be found in src/components/Layout/index.tsx
const Search = lazy(() => import('../pages/Search'))
const Movies = lazy(() => import('../pages/Movies'))
const Favorites = lazy(() => import('../pages/Favorites'))

const routes = [
  { path: '/', element: <Search /> },
  { path: '/movies', element: <Movies /> },
  { path: '/favorites', element: <Favorites /> },
]
export default routes
