import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from 'routes'
import Layout from 'components/Layout'
import Page404 from 'pages/Page404'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SearchProvider } from 'contexts/searchContext'

const queryClient = new QueryClient()
function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      children: routes,
    },
  ])

  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </QueryClientProvider>
  )
}

export default App
