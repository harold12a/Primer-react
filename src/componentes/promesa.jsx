import React,{useEffect, useState} from 'react';



function Promesa() {

    const[loading,setLoanding]=useState(true);
    const[error,seterror]=useState(false);
    const[resultado,setresultado]=useState([]);
    useEffect(() => {
     const pagara = new Promise((res,rej)=>{
            setTimeout(()=>{
                res([
                    {id:'123456789', monto:150},
                    {id:'qwe456789', monto:50},
                    {id:'re3456789', monto:60},
                    {id:'refffc3456789', monto:80},

                ]);
               
            },2000);
        });
        console.log(pagara);

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
    <div > {resultado && 
    resultado.map((item)=>(

        <>
        <p>id de pago: {item.id}</p>
        <p>monto: {item.monto}</p>
        </>
    ))}</div>
    </>
        );
}

export default Promesa;