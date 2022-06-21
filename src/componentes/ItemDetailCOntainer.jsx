import React,{useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import imagenes from '../assets/imagenes';
import {useParams} from 'react-router-dom';

let productosMock=[ 
    {category:"lociones", id:'0', title:'boss',  description:'cantidad 100ml',  price:600,  image:(imagenes.img1) },
    {category:"lociones", id:'1', title:'happy men', description:'cantidad 400ml ', price:300,   image:(imagenes.img2)},
    {category:"lociones", id:'2', title:'blue', description:'cantidad 100ml ', price:100,    image:(imagenes.img3) },
    {category:"lociones", id:'3', title:'rinox', description:'cantidad 100ml ', price:500,image:(imagenes.img4) },
    {category:"lociones", id:'4', title:'aqva', description:'cantidad 100ml ', price:100,image:(imagenes.img5) },
    {category:"lociones", id:'5', title:'paris', description:'cantidad 100ml ', price:300, image:(imagenes.img6)  },
    {category:"lociones", id:'6', title:'212vip men', description:'cantidad 50ml ', price:500,image:(imagenes.img7)},
    {category:"lociones", id:'7', title:'212vip men', description:'cantidad 100ml ', price:100,image:(imagenes.img8) },
    {category:"lociones", id:'8', title:'perriy ellis', description:'cantidad 100ml ', price:100,image:(imagenes.img9) },
    {category:"lociones", id:'9', title:'212vip men ', description:'cantidad 200ml ', price:150,image:(imagenes.img10) },
    {category:"bolsos", id:'10', title:'cart women ', description:'color amarillo de mano ', price:200,image:(imagenes.img11) },
    {category:"bolsos", id:'11', title:'fashion & bag ', description:'color verde de mano y cartera personal ', price:250,image:(imagenes.img12) },
    {category:"bolsos", id:'12', title:'mini women ', description:'todos los colores disponibles ', price:500,image:(imagenes.img13) },
    {category:"bolsos", id:'13', title:'amalei ', description:'cartera de color rosada ', price:100,image:(imagenes.img14) },
    {category:"bolsos", id:'14', title:'cam am ', description:'bolsos de espalda ', price:100,image:(imagenes.img15) },
    {category:"articulos", id:'15', title:'porta relojes ', description:'porta relojes de 10 puestos', price:1500,image:(imagenes.img16) },
    {category:"articulos", id:'16', title:'porta relojes ', description:'porta relojes de 8 puestos en madera y vidrio ', price:130,image:(imagenes.img17) },
    {category:"articulos", id:'17', title:'gusd ', description:'gafas con proteccion HUV ', price:100,image:(imagenes.img18) },
    {category:"articulos", id:'18', title:'porta relojes ', description:'porta relojes de 8 puestos ', price:100,image:(imagenes.img19) },
    {category:"articulos", id:'29', title:'gusd', description:'gafas con proteccion HUV ', price:100,image:(imagenes.img20) },
];

function ItemDetailCOntainer() {

    const{id}= useParams();
    const[loading,setLoanding]=useState(true);
    const[error,seterror]=useState(false);
    const[producto,setproducto]=useState([]);
    

    useEffect(() => {
        setproducto([]);
        setLoanding(true);
        seterror(false); 

     const proms = new Promise((res,)=>{
            setTimeout(()=>{
                res(productosMock[id-1]); 
     },2000);
            
        });
       
       proms
        .then((result)=>{setproducto(result);})
        .catch((error)=>{seterror(error);})
        .finally(()=>{setLoanding(false);
});
    }, [id]);
    
   
 return ( 
        <>
    <div > {loading && 'loading..'}</div>
    <div > {error && 'loading error'}</div>
    <ItemDetail producto={producto} />
       </>
)
};
export default ItemDetailCOntainer;



