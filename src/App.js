import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NabVar from './components/NabVar/NabVar';
import CartWidget from './components/NabVar/CartWidget';
import ItemListContainer from './components/NabVar/ItemListContainer';
import ItemCount from './components/NabVar/ItemCount';


function App() {
  return (
    <>
    <NabVar>
      <CartWidget/>
    </NabVar>
    <div>
    <ItemListContainer hola={' camisas'}/>
    <ItemCount stock={5} inicial={1} onAdd/>
    </div>
    </>
  )
  }
export default App;