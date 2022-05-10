import React from 'react';

const Header = () => {
  return (
    <header className='p-3 bg-dark text-white'>
      <div className='d-flex flex-wrap align-items-center justify-content-end'>
        <div className='text-end'>
          <span>Bienvenid@ eduardo@correo.com</span>{' '}
          <button type='button' className='btn btn-warning'>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
