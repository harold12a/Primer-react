import React from 'react';
import imagenes from '../assets/imagenes';


const ItemList = (props) => {
  return (
        <div>
         {/* <img src={imagenes.img1}  width={100}/>*/}

         <p>img: {props.url}</p> 
        <p>codigo : {props.id}</p>
        <p>description: {props.description}</p>
        <p>price: {props.price}</p>
        
        </div>
    
  )
}

export default ItemList;


