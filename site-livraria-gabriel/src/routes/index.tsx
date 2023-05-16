

import { Routes,Route,Navigate } from 'react-router-dom';
import { Home,Livros, Livro  } from '../pages';
import { Carrinho } from '../pages/Carrinho';


export const AppRoutes = () =>{

    return(
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/livros' element={<Livros />} />
            <Route path='/livro/:id' element={<Livro />} />
            <Route path='/carrinho' element={<Carrinho />} />
            <Route path='*' element={<Navigate to="/home" />} />
        </Routes>
    );
}