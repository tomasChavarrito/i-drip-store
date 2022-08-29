import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
 import Inicio from './components/pages/Inicio'
 import Phones from './components/pages/Phone'
 import Items from './components/pages/Items'

function App(){

  return(

    <div className="App">
      <Router>

        <Navbar/>

      </Router>


    </div>
  );
}

export default App;
