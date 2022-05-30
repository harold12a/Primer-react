import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import MuiNavBar from './componentes/MuiNavBar';



function App() {
    return ( 
    <div className = "App" >
      {/*  <NavBar/>*/}
      <MuiNavBar/>

         
<ItemListContainer texto={"nuestra tienda virtual cuenta con una gran variedad de articulos que tenemos disponibles para ustedes"}/>
        
        
        
       </div>
    );
}

export default App;


