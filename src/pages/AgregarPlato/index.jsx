import Formuario from '../../components/Formulario';
import Siderbard from '../../components/Siderbard';
import Header from '../../components/Header';

const AgregarPlato = () => {
  return (
    <section className='d-flex'>
      <Siderbard />
      <div style={{ width: '100%' }}>
        <Header />
        <main className='container'>
          <div className='row'>
            <div className='col-12'>
              <h5 className='text-primary text-center py-3'>
                Agregar Nuevo Plato
              </h5>
              <div className='shadow-lg p-3 mb-5 bg-body rounded'>
                <Formuario />
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default AgregarPlato;
