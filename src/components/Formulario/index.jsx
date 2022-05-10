import React from 'react';
import Error from './Error';

const initialState = {
  nombre: '',
  precio: '',
  categoria: '',
  descripcion: '',
};

const categorias = ['Bebidas', 'Cortes', 'Entradas', 'Postres'];

const Formuario = () => {
  return (
    <form className='row g-3'>
      <div className='col-md-6'>
        <label htmlFor='dish' className='form-label'>
          Nombre del plato
        </label>
        <input type='text' className='form-control' name='nombre' />
        <Error text={'error'} />
      </div>
      <div className='col-md-6'>
        <label htmlFor='price' className='form-label'>
          precio
        </label>
        <input type='number' className='form-control' name='precio' />
        <Error text={'error'} />
      </div>
      <div className='col-6'>
        <label htmlFor='inputAddress' className='form-label'>
          Categoría
        </label>
        <select className='form-select' name='categoria'>
          <option disabled value=''>
            Selecciona una Categoría
          </option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
        <Error text={'error'} />
      </div>
      <div className='col-md-6'>
        <label htmlFor='exampleFormControlTextarea1' className='form-label'>
          Descripción
        </label>
        <textarea
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='3'
          name='descripcion'
        ></textarea>
        <Error text={'error'} />
      </div>
      <div className='col-6'>
        <button type='submit' className='btn btn-primary'>
          Crear o editar Plato
        </button>
      </div>
    </form>
  );
};

export default Formuario;
