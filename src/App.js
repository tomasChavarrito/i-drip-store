import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
 import Inicio from './components/pages/Inicio'
 import Phones from './components/pages/Phone'
import './App.css'
import {Phone} from './components/pages/Props'
import {ItemListContainer} from './components/ItemListContainer'

const App=()=>{

  return(

    <div className="App">
      <Router>

        <Navbar/>

      </Router>

      <texto> E-commerce dedicada a la importación y venta de celulares de alta gama </texto>
      <hr/>

      <Phone 
        name='Iphone 13'
        marca=' Apple'
        stock=' 10'
        precio=' u$d1000'
        image= './iphone13.png'
        />

      
      <ItemListContainer/>
    </div>
  );
}

export default App;
