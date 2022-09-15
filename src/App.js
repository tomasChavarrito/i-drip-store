import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/pages/Inicio'
import Phones from './components/pages/Phone'
import './App.css'
import {Phone} from './components/pages/Props'
import {ItemListContainer} from './components/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/itemDetailC'


const App=()=>{

  return(

    <div className="App">
      <Router> 

        <Navbar/>

        <Routes>
          <Route path= '/inicio' element={<ItemListContainer />} />
          <Route path= '/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path= '/cart' element={<ItemListContainer />} />
          <Route path= '/detalle/:Id' element={<ItemDetailContainer />} />
        </Routes>

      </Router>



    </div>
  );
}

export default App;
