import Table from '../../components/Table';
import Siderbard from '../../components/Siderbard';
import Header from '../../components/Header';
const Dashboard = () => {
  return (
    <section className='d-flex'>
      <Siderbard />
      <div style={{ width: '100%' }}>
        <Header />
        <main className='container'>
          <h1>Productos</h1>
          <Table />
        </main>
      </div>
    </section>
  );
};

export default Dashboard;
