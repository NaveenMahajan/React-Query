import SingleItem from './SingleItem';
import customFetch from './utils';
import {useQuery} from '@tanstack/react-query'

const Items = () => {

  const {isLoading,data,error,isError}=useQuery({
    queryKey:['tasks'],queryFn:()=> customFetch.get('http://localhost:5000/api/tasks')
 })
 if(isLoading){
  return <p style={{marginTop:'1rem'}}>Loading......</p>
 }
 if(isError){
  return <p>Somthing Went Wrong</p>
 }
  return (
    <div className='items'> 
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
 