import ItemList from '../ItemList';
import autos from '../autos';
import React, { useState } from "react";




function ItemListContainer(props){
  const [hola,setAutos] = useState()
  const busqueda = new Promise((res,rej)=>{
      
   setTimeout(()=>{
              res(autos)}
              ,2000)
       
    })
    busqueda.then(respuesta =>{
      setAutos(respuesta)})

    //.catch(error => console.log(error))
  
  console.log(autos)
   
  
    return(
        <div>
        <div>
            <h1>{props.hola}</h1>
            
        </div>
           <ItemList vehiculos={hola}/>
        </div>


    )
}
export default ItemListContainer;