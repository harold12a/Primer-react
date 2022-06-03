import React from 'react';
import './App.css';
import ItemCount from './componentes/ItemCount';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import Promesa from './componentes/promesa';




function App() {

  const onAdd =(quantity)=>{
    alert(`compraste en boutiqueak  ${quantity} uniades`);
   // console.log(`compraste${quantity}uniades`);
  }
  
  
    return ( 
    <div className = "App" >
      
      
     {/* <NavBar/>*/}
        <ItemListContainer texto={"nuestra tienda virtual cuenta con una gran variedad de articulos que tenemos disponibles para ustedes"}/>
    {/*<ItemCount initial={1} stock ={5} onAdd={onAdd}/>*/}
       {/* <Promesa/>*/}
       
       </div>
    );
}

export default App;


