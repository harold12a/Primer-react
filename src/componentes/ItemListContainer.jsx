import React,{useEffect, useState} from 'react';
import ItemList from './ItemList';
import imagenes from '../assets/imagenes';


function ItemListContainer() {

    const[loading,setLoanding]=useState(true);
    const[error,seterror]=useState(false);
    const[resultado,setresultado]=useState([]);
    useEffect(() => {
     const pagara = new Promise((res,)=>{
            setTimeout(()=>{
                res([
                    
                    {id:'1', title:'#0001', description:'locion ', price:70000, imagen:(imagenes.img1) },
                    {id:'123456789', title:'cosa', description:'color azul impermeable ', price:150, },
                    {id:'123456789', title:'cosa', description:'color azul impermeable ', price:150,  },
                    {id:'123456789', title:'cosa', description:'color azul impermeable ', price:150,},
                    {id:'123456789', title:'cosa', description:'color azul impermeable ', price:150,},
                ]);    
            },2000);
        });
       
       pagara
        .then((result)=>{
            setresultado(result);
            
         })
         .catch((error)=>{
            seterror(true);
            setLoanding(error);
         })
         .finally(()=>{
             setLoanding(false);
         });
    }, []);
    
   
 return ( 
        <>
    <div > {loading && 'loding..'}</div>
    <div > {error && 'hubo error en el pago'}</div>
    
    
    <> {resultado && 
    resultado.map((item)=>{
        return<ItemList id ={item.id} description={item.description} price={item.price} img={item.URL}/>
       
    })}</>
    </>
        );
};

export default ItemListContainer;


