import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes , Route } from 'react-router-dom';
import  NavBar  from "./Components/NavBar";
import Inicio from './Components/Inicio';
import Pagina1 from "./Components/pagina1";
import Pagina2 from "./Components/pagina2";
import Pagina3 from "./Components/pagina3";
import Pagina4 from "./Components/pagina4";
import Pagina5 from "./Components/pagina5";
import Pagina6 from "./Components/pagina6";
import Pagina7 from "./Components/pagina7";
import Formulario from "./Components/formulario";
import Autor from "./Components/autor";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/Inicio' element={<Inicio />} />
        <Route path='/pagina1' element={<Pagina1 />} />
        <Route path='/pagina2' element={<Pagina2 />} />
        <Route path='/pagina3' element={<Pagina3 />} />
        <Route path='/pagina4' element={<Pagina4 />} />
        <Route path='/pagina5' element={<Pagina5 />} />
        <Route path='/pagina6' element={<Pagina6 />} />
        <Route path='/pagina7' element={<Pagina7 />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/autor' element={<Autor />} />
      </Routes>
    </div>
  );
}

export default App;
