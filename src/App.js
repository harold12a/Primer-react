import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ItemDetailCOntainer from './componentes/ItemDetailCOntainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import Cart from './componentes/Cart';
import { CartProvider } from './componentes/CartContext';

import { initializeApp } from "firebase/app";




function App() {
  initializeApp ({
    apiKey: "AIzaSyD_AiMgWuYpchDHeMiPa3o_WGNsXsksdxs",
    authDomain: "coderhouse-ef71d.firebaseapp.com",
    databaseURL: "https://coderhouse-ef71d-default-rtdb.firebaseio.com",
    projectId: "coderhouse-ef71d",
    storageBucket: "coderhouse-ef71d.appspot.com",
    messagingSenderId: "535441858158",
    appId: "1:535441858158:web:305b09901427444a75107f",
    measurementId: "G-W8RK943LC9"
  }) ;
  
 



  return (
    <>
      <div className='App'  >
        <CartProvider>
          <BrowserRouter >
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} ></Route>
              <Route path='/category/:id' element={<ItemListContainer />} ></Route>
              <Route path='/item/:id' element={<ItemDetailCOntainer />}>  </Route>
              <Route path='/cart' element={<Cart />}>  </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </div>
    </>
  );
}

export default App;


