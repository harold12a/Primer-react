import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ItemDetailCOntainer from './componentes/ItemDetailCOntainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';




function App() {

 
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


