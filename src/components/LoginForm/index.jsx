const LoginForm = () => {
  return (
    <form className='border border-1 p-5'>
      <h2 className='p-3 text-center'>Hola, Bienvenid@s</h2>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Correo
        </label>
        <input type='email' className='form-control' name='email' />
      </div>
      <div className='mb-3'>
        <label htmlFor='password' className='form-label'>
          Contraseña
        </label>
        <input type='password' className='form-control' name='password' />
      </div>

      <div className='d-grid gap-2 mx-auto'>
        <button type='submit' className='btn btn-primary'>
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
