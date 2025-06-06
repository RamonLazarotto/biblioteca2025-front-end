import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './componentes/Menu.js';
import FormAutor from './paginas/FormAutor.js';
import FormCategoria from './paginas/FormCategoria.js';
import Home from './paginas/Home.js';
import ListaAutor from './paginas/ListaAutor.js';
import ListaCategoria from './paginas/ListaCategoria.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />

        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/listacategoria' element={<ListaCategoria />} />
            <Route path='/cadastrocategoria' element={<FormCategoria />} />
            <Route path='/cadastrocategoria/:id' element={<FormCategoria />} />

            <Route path='/listaautor' element={<ListaAutor />} />
            <Route path='/cadastroautor' element={<FormAutor />} />
            <Route path='/cadastroautor/:id' element={<FormAutor />} />

            <Route path='*' element={<Home />} />
          </Routes>
        </div>




      </BrowserRouter>
    </>
  );
}

export default App;