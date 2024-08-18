import React, { createContext, useState, useContext } from 'react'

const intitialState = {
  searchTerm: '',
  updateSearchTerm: (term: string) => {},
}

const SearchContext = createContext(intitialState)

interface OwnProps {
  children: React.ReactNode
}

export const SearchProvider = ({ children }: OwnProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  const updateSearchTerm = (term: string) => {
    setSearchTerm(term)
  }

  return (
    <SearchContext.Provider value={{ searchTerm, updateSearchTerm }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => {
  return useContext(SearchContext)
}
