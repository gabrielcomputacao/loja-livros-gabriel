

import { Routes,Route,Navigate } from 'react-router-dom';
import { Home } from '../pages';
import { Livros } from '../shared/components';

export const AppRoutes = () =>{

    return(
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/livros' element={<Livros />} />
            <Route path='*' element={<Navigate to="/home" />} />
        </Routes>
    );
}