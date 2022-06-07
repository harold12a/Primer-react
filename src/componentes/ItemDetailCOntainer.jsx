
import React,{useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const url =  'https://coderhouse-ef71d-default-rtdb.firebaseio.com/.json'
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
      {!todos? 'cargando...' :
       todos.map((todo,index)=>{
           return <li key={index} >{todo.descripcion} {todo.name} {todo.stock} {todo.valor} </li>
       }) 
       } 
        
         </div>
        
    );
}
   
 


export default ItemDetailContainer;

