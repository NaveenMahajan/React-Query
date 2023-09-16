import React from 'react'
import { useGlobalContext } from '../Global'
import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs'
const ThemeToggle = () => {
const {toggleDarkTheme,isDarkTheme}= useGlobalContext()
  return (
    <div className='toggle-container'>

      <button className='dark-toggle ' onClick={toggleDarkTheme} >
        {isDarkTheme ? <BsFillMoonFill className='toggle-icon'/>:
        <BsFillSunFill className='toggle-icon'/>}</button>
   
    </div>
  )
}

export default ThemeToggle
