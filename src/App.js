import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ItemDetailCOntainer from './componentes/ItemDetailCOntainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';




function App() {

  const onAdd =(quantity)=>{
    alert(`compraste en boutiqueak  ${quantity} uniades`);
   // console.log(`compraste${quantity}uniades`);
  }
  
  
    return ( 
      <BrowserRouter>
      <NavBar/>
      <Routes>

      <Route path='/' element={<ItemListContainer/>} ></Route>

      <Route path='/category/:id' element={<ItemListContainer/>} ></Route>

      <Route path='/item/:id' element={<ItemDetailCOntainer/>}>  </Route> 
      
      </Routes>
      </BrowserRouter>
       
    );
}

export default App;
    {/*<ItemCount initial={1} stcok={5} onAdd={onAdd}  */}

