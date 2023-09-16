import React from 'react'
import { useGlobalContext } from '../Global'
const SearchForm = () => {
  const {setSearchTerm}=useGlobalContext()
  const handlSubmit=(e)=>{
    e.preventDefault()
const searchValue=e.target.elements.search.value;
if(!searchValue)return
setSearchTerm(searchValue)
  } 
   return (
    <div>
      <h1 className='title'>unplash images</h1>
      <form className='search-form' onSubmit={handlSubmit}>
      <input className='form-input search-input'
       type="text" 
        placeholder='cat'
       name='search'
      />
        <button type='submit' className='btn'>Search</button>
     </form>
    </div>
  )
}

export default SearchForm