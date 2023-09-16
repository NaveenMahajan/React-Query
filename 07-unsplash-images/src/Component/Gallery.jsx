import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from '../Global'
const url ='https://api.unsplash.com/search/photos?client_id=mBIhQqTGbzQYl1pAIgEXBRHLeDBZZ3sFYpZ3CVvOmbg'


const Gallery = () => {
  const {searchTerm,setSearchTerm}=useGlobalContext()
const response = useQuery({
  queryKey:['images',searchTerm],
  queryFn: async ()=>{
    const result=await axios.get(`${url}&query=${searchTerm}`)
  
    return result.data
  }
})
console.log(response)
if(response.isLoading){
  return (
     <section className='image-container'>
 <h4>Loading....</h4>
  </section>)
}
if(response.isError){
  return( 
  <section className='image-container'>
 <h4>There was an Error</h4>
  </section>
  )
}
const results=response.data.results
if(results.length < 1){
    <section className='image-container'>
 <h4>No Results Found....</h4>
  </section>
}
  
return (
  <section className='image-container'>
    {results.map(({urls:{regular},alt,id})=>{
 return(
     <div key={id}>
     <img src={regular} alt={alt} className='img'/>
     </div>
      )
    })}
  </section>
  )
}

export default Gallery