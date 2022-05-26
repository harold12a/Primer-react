import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar';
import Cart from './componentes/CartWidget';
import Item from './componentes/ItemListContainer';





function App() {
    return ( 
    <div className = "App" >
        <NavBar/>
        <Item texto={"nuestra tienda virtual cuenta con una gran variedad de articulos que tenemos disponibles para ustedes"}/>
        
        
        
       </div>
    );
}

export default App;


