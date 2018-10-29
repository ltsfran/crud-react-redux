const initialStateUser = {
  user: {
    name: '',
    username: '',
    email: '',
    website: ''
  }
};

export const todo = (state = initialStateUser, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};
