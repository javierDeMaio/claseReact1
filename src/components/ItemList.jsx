import Ítem from 'react';


function ItemList(vehiculos){
    console.log('ItemList',vehiculos)
return(
    <>
 
       {vehiculos? vehiculos.map(auto=> <Ítem id={auto.id} marca={auto.marca} modelo={auto.modelo}  img={auto.foto} precio={auto.precio}/>) : <div>vehiculos undefined</div>}
     </>
      )
}
export default ItemList;