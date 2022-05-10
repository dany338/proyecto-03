import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loigin from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import AgregarPlato from '../pages/AgregarPlato';
import EditarPlato from '../pages/EditarPlato';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loigin/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/agregar-plato' element={<AgregarPlato/>} />
        <Route path='/editar-plato/:editId' element={<EditarPlato/>} />
        <Route
          path='*'
          element={
            <div>
              <p>No se encontró la página consultada</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
