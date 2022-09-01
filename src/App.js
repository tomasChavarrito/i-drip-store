import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
 import Inicio from './components/pages/Inicio'
 import Phones from './components/pages/Phone'
import './App.css'
import {Phone} from './components/pages/Props'

const App=()=>{

  return(

    <div className="App">
      <Router>

        <Navbar/>

      </Router>

      <h1> E-commerce dedicada a la importación y venta de celulares de alta gama </h1>
      <hr/>

      <Phone 
        name='Iphone 13'
        marca='Apple'
        stock='5'
        image= './iphone13.png'
        />
    </div>
  );
}

export default App;
