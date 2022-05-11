import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const [isAuth] = useState(false);

  return <>{isAuth ? <Navigate to='/dashboard' /> : children}</>;
};

export default PublicRoute;
