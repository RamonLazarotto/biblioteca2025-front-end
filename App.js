import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './componentes/Menu.js';
import FormAutor from './paginas/FormAutor.js';
import FormCategoria from './paginas/FormCategoria.js';
import FormEditora from './paginas/FormEditora.js';
import FormLivro from './paginas/FormLivro.js';
import FormUsuario from './paginas/FormUsuario.js';
import FormFuncionario from './paginas/FormFuncionario.js';
import Home from './paginas/Home.js';
import ListaAutor from './paginas/ListaAutor.js';
import ListaCategoria from './paginas/ListaCategoria.js';
import ListaEditora from './paginas/ListaEditora.js';
import ListaLivro from './paginas/ListaLivro.js';
import ListaUsuario from './paginas/ListaUsuario.js';
import ListaFuncionario from './paginas/ListaFuncionario.js';

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

            <Route path='/listaeditora' element={<ListaEditora />} />
            <Route path='/cadastroeditora' element={<FormEditora />} />
            <Route path='/cadastroeditora/:id' element={<FormEditora />} />

            <Route path='/listalivro' element={<ListaLivro />} />
            <Route path='/cadastrolivro' element={<FormLivro />} />
            <Route path='/cadastrolivro/:id' element={<FormLivro />} />

            <Route path='/listausuario' element={<ListaUsuario />} />
            <Route path='/cadastrousuario' element={<FormUsuario />} />
            <Route path='/cadastrousuario/:id' element={<FormUsuario />} />

            <Route path='/listafuncionario' element={<ListaFuncionario />} />
            <Route path='/cadastrofuncionario' element={<FormFuncionario />} />
            <Route path='/cadastrofuncionario/:id' element={<FormFuncionario />} />

            <Route path='*' element={<Home />} />
          </Routes>
        </div>




      </BrowserRouter>
    </>
  );
}

export default App;