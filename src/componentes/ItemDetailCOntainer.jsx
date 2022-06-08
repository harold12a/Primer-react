import React,{useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailCOntainer() {
    const[character,setCharacter]=useState({}); 
    const initialUrl ="https://rickandmortyapi.com/api/character";
   
    const fetchCharacters = (url)=>{
        fetch(url)
        .then((Response)=>Response.json())
        .then((data)=>setCharacter(data.results[5]))
        .catch(error=>console.log(error))
     };
   
     useEffect(()=>{
         setTimeout(() => {
            fetchCharacters(initialUrl);
         }, 2000);
     },[])

    return ( 
       <div className='container mt-5'>
            { (character.id ?? null) ? <ItemDetail character={character}/> : ''}
       </div>
    );
}
   
export default ItemDetailCOntainer;


