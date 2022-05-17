import Rutas from './routes';
import AuthState from './context/auth/authState';
import ProductState from './context/products/ProductState';

function App() {
  return (
    <AuthState>
      <ProductState>
        <Rutas />;
      </ProductState>
    </AuthState>
  );
}

export default App;
