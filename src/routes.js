import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from './componentes/Menu';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path='/sobremim' element={<SobreMim />} />
        <Route path='*' element={<div>Pagina nao encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;