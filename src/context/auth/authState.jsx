import React, { useReducer } from 'react';
import AuthContext from './authContext';
import reducer from './authReducer';

import { firebase } from '../../firebase';

const AuthState = ({ children }) => {
  const initialState = {
    isAuth: false,
    email: null,
  };

  const iniciarSesion = async (email, password) => {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      dispatch({
        type: 'LOGIN',
        payload: { email: user.email, isAuth: true },
      });
    } catch (error) {
      console.log('mira el error', error);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, iniciarSesion }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
