import Formuario from '../../components/Formulario';

const EditarPlato = () => {
  return (
    <div className='row'>
      <div className='col-12'>
        <h5 className='text-primary text-center py-3'>Editar Plato</h5>
        <div className='shadow-lg p-3 mb-5 bg-body rounded'>
          <Formuario />
        </div>
      </div>
    </div>
  );
};

export default EditarPlato;
