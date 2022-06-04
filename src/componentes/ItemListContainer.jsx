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
                    
                    {id:'1', title:'#0001', description:'locion ', price:70000,  image:(imagenes.img1) },
                    {id:'2', title:'cosa', description:'color azul impermeable ', price:150,image:(imagenes.img2)},
                    {id:'3', title:'cosa', description:'color azul impermeable ', price:150,image:(imagenes.img3) },
                    {id:'4', title:'cosa', description:'color azul impermeable ', price:150,image:(imagenes.img4) },
                    {id:'5', title:'cosa', description:'color azul impermeable ', price:150,image:(imagenes.img5) },
                    {id:'6', title:'#0001', description:'locion ', price:70000, image:(imagenes.img6)  },
                    {id:'7', title:'cosa', description:'color azul impermeable ', price:150,image:(imagenes.img7)},
                    {id:'8', title:'cosa', description:'color azul impermeable ', price:150,image:(imagenes.img8) },
                    {id:'9', title:'cosa', description:'color azul impermeable ', price:150,image:(imagenes.img9) },
                    {id:'10', title:'cosa', description:'color azul impermeable ', price:150,image:(imagenes.img10) },
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

    <div>
        <ItemList resultado={resultado} />
    </div>
    </>
)
    
        
};
export default ItemListContainer;


