
import React from 'react'

const ItemDetail = ({character}) => {
    return (
      <div className='row'>
            <div className='col mb-5'>
              <div className='card' width='50' >
                <img src={character.image} alt=''/>
                <div className='card-body'>
                  <h5 className='card-title'>{character.name}</h5>
                  <hr/>
                  <p>$150</p>
                  <p>stock 50 unidades</p>
                  <p>location: {character.location.name}</p>
                </div>
             </div>
            </div>
       
       </div>
    );
};

export default ItemDetail;


{/*import React from 'react'



const ItemDetail = ({characters}) => {
  return (
    <div className='row'>
      {characters.map((item,index)=>(
          <div key={index} className='col mb-5'>
            <div className='card'>
              <img src={item.image} alt=''/>
              <div className='card-body'>
                <h5 className='card-title' >{item.name}</h5>
                <hr/>
                <p>$150</p>
                <p>stock 50 unidades</p>
                <p>location: {item.location.name}</p>

              </div>
           </div>
          </div>
))}
     
     </div>
  );
};

export default ItemDetail;*/} 