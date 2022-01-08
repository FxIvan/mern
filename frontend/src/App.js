import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import { Formulario } from './component/Formulario';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Formulario/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
