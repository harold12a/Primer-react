
import React,{useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const url = 'https://api.mercadolibre.com/sites/MLA/domain_discovery/search?limit=1&q=celular%20iphone'
    const [todos,setTodos]= useState()
    const fetchApi = async ()=> {
        const response = await fetch (url)
        console.log(response.statusText)
         const responseJSON = await response.json()
        setTodos(responseJSON)
       }
    useEffect(()=>{
        fetchApi()
     }, [])

    return ( 
  <div >
      <ItemDetail todo={!todos? 'cargando...' :
       todos.map((todo,index)=>{
           return <li key={index} >{todo.domain_id} {todo.domain_name} {todo.category_name}  </li>
       }) 
       } />
        
         </div>
        
    );
}
   
 


export default ItemDetailContainer;

