import React,{useEffect, useState} from 'react';
import ItemList from './ItemList';
import imagenes from '../assets/imagenes';



function ItemListContainer() {

    const[loading,setLoanding]=useState(true);
    const[error,seterror]=useState(false);
    const[producto,setproducto]=useState([]);
    useEffect(() => {
     const articulos = new Promise((res,)=>{
            setTimeout(()=>{
                res([
                    
                    {id:'1', title:'boss', description:'cantidad 100ml  ', price:60000,  image:(imagenes.img1) },
                    {id:'2', title:'happy men', description:'cantidad 400ml ', price:30000,   image:(imagenes.img2)},
                    {id:'3', title:'blue', description:'cantidad 100ml ', price:100000,    image:(imagenes.img3) },
                    {id:'4', title:'rinox', description:'cantidad 100ml ', price:50000,image:(imagenes.img4) },
                    {id:'5', title:'aqva', description:'cantidad 100ml ', price:100000,image:(imagenes.img5) },
                    {id:'6', title:'paris', description:'cantidad 100ml ', price:30000, image:(imagenes.img6)  },
                    {id:'7', title:'212vip men', description:'cantidad 50ml ', price:50000,image:(imagenes.img7)},
                    {id:'8', title:'212vip men', description:'cantidad 100ml ', price:10000,image:(imagenes.img8) },
                    {id:'9', title:'perriy ellis', description:'cantidad 100ml ', price:100000,image:(imagenes.img9) },
                    {id:'10', title:'212vip men ', description:'cantidad 200ml ', price:150000,image:(imagenes.img10) },
                ]);    
            },2000);
        });
       
       articulos
        .then((result)=>{
            setproducto(result);
            
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
        <ItemList producto={producto} />
    </div>
    </>
)
    
        
};
export default ItemListContainer;


