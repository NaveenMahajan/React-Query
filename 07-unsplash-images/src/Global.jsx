import React, { createContext, useContext, useState } from 'react'


const AppContext = createContext()
export const Global = ({children}) => {
const [isDarkTheme,setIsDarkTheme]=useState(false)
const [searchTerm,setSearchTerm]=useState('car')
const toggleDarkTheme=()=>{

  const newDarkTheme=!isDarkTheme
  setIsDarkTheme(newDarkTheme)

  const body = document.querySelector('body')
  body.classList.toggle('dark-theme',newDarkTheme);
  console.log(body);
}
  return (
    <AppContext.Provider value={{toggleDarkTheme,isDarkTheme,searchTerm,setSearchTerm}}>
      {children}
    </AppContext.Provider>

  )
}
export const useGlobalContext=()=>{
  return useContext(AppContext)
}
