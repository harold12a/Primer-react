import React,{useEffect, useState} from 'react';
import imagenes from '../assets/imagenes';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';

let productosMock=[ 
    {category:"lociones", id:'1', title:'boss',  description:'cantidad 100ml',  price:60000,  image:(imagenes.img1) },
    {category:"lociones", id:'2', title:'happy men', description:'cantidad 400ml ', price:30000,   image:(imagenes.img2)},
    {category:"lociones", id:'3', title:'blue', description:'cantidad 100ml ', price:100000,    image:(imagenes.img3) },
    {category:"lociones", id:'4', title:'rinox', description:'cantidad 100ml ', price:50000,image:(imagenes.img4) },
    {category:"lociones", id:'5', title:'aqva', description:'cantidad 100ml ', price:100000,image:(imagenes.img5) },
    {category:"lociones", id:'6', title:'paris', description:'cantidad 100ml ', price:30000, image:(imagenes.img6)  },
    {category:"lociones", id:'7', title:'212vip men', description:'cantidad 50ml ', price:50000,image:(imagenes.img7)},
    {category:"lociones", id:'8', title:'212vip men', description:'cantidad 100ml ', price:10000,image:(imagenes.img8) },
    {category:"lociones", id:'9', title:'perriy ellis', description:'cantidad 100ml ', price:100000,image:(imagenes.img9) },
    {category:"lociones", id:'10', title:'212vip men ', description:'cantidad 200ml ', price:150000,image:(imagenes.img10) },
    {category:"bolsos", id:'11', title:'cart women ', description:'color amarillo de mano ', price:200000,image:(imagenes.img11) },
    {category:"bolsos", id:'12', title:'fashion & bag ', description:'color verde de mano y cartera personal ', price:250000,image:(imagenes.img12) },
    {category:"bolsos", id:'13', title:'mini women ', description:'todos los colores disponibles ', price:50000,image:(imagenes.img13) },
    {category:"bolsos", id:'14', title:'amalei ', description:'cartera de color rosada ', price:100000,image:(imagenes.img14) },
    {category:"bolsos", id:'15', title:'cam am ', description:'bolsos de espalda ', price:100000,image:(imagenes.img15) },
    {category:"articulos", id:'16', title:'porta relojes ', description:'porta relojes de 10 puestos', price:150000,image:(imagenes.img16) },
    {category:"articulos", id:'17', title:'porta relojes ', description:'porta relojes de 8 puestos en madera y vidrio ', price:130000,image:(imagenes.img17) },
    {category:"articulos", id:'18', title:'gusd ', description:'gafas con proteccion HUV ', price:100000,image:(imagenes.img18) },
    {category:"articulos", id:'19', title:'porta relojes ', description:'porta relojes de 8 puestos ', price:100000,image:(imagenes.img19) },
    {category:"articulos", id:'20', title:'gusd', description:'gafas con proteccion HUV ', price:100000,image:(imagenes.img20) },
];

function ItemDetailCOntainer() {

    const{id}= useParams();
     console.log(id);
    const[loading,setLoanding]=useState(true);
    const[error,seterror]=useState(false);
    const[producto,setproducto]=useState([]);
    useEffect(() => {
        setproducto([]);
        setLoanding(true);
        seterror(error); 
     const articulos = new Promise((res,)=>{
            setTimeout(()=>{
       

         (!id) ?  res (productosMock) : res(productosMock.find(item=>item.id===id))  
     },2000);
            
        });
       
       articulos
        .then((result)=>{
            setproducto(result);
            
         })
         .catch((error)=>{
            seterror(error);
            
         })
         .finally(()=>{
             setLoanding(false);
         });
    },[id]);
    
    
    return ( 
<>
<div > {loading && 'loding..'}</div>
    <div > {error && 'hubo error en el pago'}</div>

       <div className='container mt-5'>
            { (producto.id ?? null) ? <ItemDetail producto={producto}/> : ''}
       </div>
       </>
    );
}
   
export default ItemDetailCOntainer;
