import React,{useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailCOntainer() {
    const[character,setCharacter]=useState({}); /* lo cambie a character porque hace referencia a un solo personaje */
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
            { (character.id ?? null) ? <ItemDetail character={character}/> : ''} {/* comprueba que llegue el objeto para luego renderizar */}
       </div>
    );
}
   
export default ItemDetailCOntainer;




{/*import React,{useEffect, useState} from 'react';
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
   
 


    export default ItemDetailCOntainer;*/}

