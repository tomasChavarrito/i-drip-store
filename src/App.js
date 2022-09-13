import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom'
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

        <Routes>
          <Route path= '/inicio' element={<ItemListContainer />} />
          <Route path= '/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path= '/cart' element={<ItemListContainer />} />
        </Routes>

      </Router>



    </div>
  );
}

export default App;
