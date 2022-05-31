import React from 'react';
import './App.css';
import ItemCount from './componentes/ItemCount';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';



function App() {
    return ( 
    <div className = "App" >
      <NavBar/>
        <ItemListContainer texto={"nuestra tienda virtual cuenta con una gran variedad de articulos que tenemos disponibles para ustedes"}/>
        <ItemCount initial={1} stock ={5}/>
        
        
       </div>
    );
}

export default App;


