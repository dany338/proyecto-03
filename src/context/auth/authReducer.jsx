const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        email: action.payload.email,
        isAuth: action.payload.isAuth,
      };

    default:
      return state;
  }
};

export default reducer;
