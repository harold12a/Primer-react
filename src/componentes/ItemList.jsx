import React from 'react';
import Item from './Item';

const ItemList = ({resultado}) => {
  return (
        <div>
         {resultado?.map(resultado=><Item id ={resultado.id} description={resultado.description} price={resultado.price} img={resultado.image} title={resultado.title} />)}
       
        </div>
     
  )
}

export default ItemList;


