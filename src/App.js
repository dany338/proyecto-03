import Rutas from './routes';
import AuthState from './context/auth/authState';

function App() {
  return (
    <AuthState>
      <Rutas />;
    </AuthState>
  );
}

export default App;
