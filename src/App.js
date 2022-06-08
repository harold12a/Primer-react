import React from 'react';
import './App.css';
import ItemCount from './componentes/ItemCount';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailCOntainer from './componentes/ItemDetailCOntainer';





function App() {

  const onAdd =(quantity)=>{
    alert(`compraste en boutiqueak  ${quantity} uniades`);
   // console.log(`compraste${quantity}uniades`);
  }
  
  
    return ( 
    <div className = "App" >
      
      
    <NavBar/>
    {/*<ItemListContainer/>*/}
    
     <ItemDetailCOntainer/>
     <ItemCount initial={1} stock ={5} onAdd={onAdd}/>
       
       
       </div>
    );
}

export default App;


