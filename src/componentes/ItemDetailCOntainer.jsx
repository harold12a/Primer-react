import React,{useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';



function ItemDetailCOntainer() {
    const[characters,setCharacters]=useState([]);
    const initialUrl ="https://rickandmortyapi.com/api/character";
   
    const fetchCharacters = (url)=>{
        fetch(url)
        .then((Response)=>Response.json())
        .then((data)=>setCharacters(data.results))
        .catch(error=>console.log(error))
     };
     useEffect(()=>{
         fetchCharacters(initialUrl);
     },[])

    return ( 
       <div className='container mt-5'>
       <ItemDetail characters={characters}/>
        
    </div>
      
  
         );}
   
 


export default ItemDetailCOntainer;

