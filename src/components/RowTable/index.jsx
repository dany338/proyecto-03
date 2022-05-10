import React from 'react';
import { Link } from 'react-router-dom';

const RowTable = () => {
  return (
    <tr>
      <th scope='row'>0</th>
      <td>nombre</td>
      <td>categoria</td>
      <td>S/ 10</td>
      <td className='d-flex justify-content-around'>
        <Link className='btn btn-warning' to={`/editar-plato/123`}>
          Editar
        </Link>
        <button className='btn btn-primary'>Ver detalle</button>
        <button className='btn btn-danger'>Eliminar</button>
      </td>
    </tr>
  );
};

export default RowTable;
