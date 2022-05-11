import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Siderbard from '../components/Siderbard';

const PrivateRoute = ({ children }) => {
  const [isAuth] = useState(false);

  return (
    <>
      <section className='d-flex'>
        <Siderbard />
        <div style={{ width: '100%' }}>
          <Header />
          <main className='container'>
            {isAuth ? children : <Navigate to='/' />}
          </main>
        </div>
      </section>
    </>
  );
};

export default PrivateRoute;
