

import { Routes,Route,Navigate } from 'react-router-dom';
import { Home,Livros, Livro  } from '../pages';
import { Carrinho } from '../pages/Carrinho';
import { FecharCompra } from '../pages/FecharCompra';


export const AppRoutes = () =>{

    return(
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/livros' element={<Livros />} />
            <Route path='/livro/:id' element={<Livro />} />
            <Route path='/carrinho' element={<Carrinho />} />
            <Route path='/compra' element={<FecharCompra />} />
            <Route path='*' element={<Navigate to="/home" />} />
        </Routes>
    );
}