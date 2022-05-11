import React from 'react';
import RowTable from '../RowTable';

const Table = () => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Nombre</th>
          <th scope='col'>Categoria</th>
          <th scope='col'>Precio</th>
          <th className='text-center' scope='col'>
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <RowTable />
        <RowTable />
        <RowTable />
        <RowTable />
        <RowTable />
        <RowTable />
      </tbody>
    </table>
  );
};

export default Table;
