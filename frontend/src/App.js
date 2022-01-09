import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import { Actualizar } from './component/Actualizar';
import { Formulario } from './component/Formulario';
import { ListaUsuario } from './component/ListaUsuario';
import { NavBar } from './component/Navbar';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Formulario/>} />
        <Route path='/listausuario' element={<ListaUsuario/>}/>
        <Route path='/editar/:id' element={<Actualizar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
