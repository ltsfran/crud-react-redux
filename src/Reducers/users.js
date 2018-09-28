const initialStateUser = {
  isLoading: true,
  data: [],
  error: null
};

export const users = (state = initialStateUser, action) => {
  switch (action.type) {
    case 'LIST_USER':
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data
      });
    case 'FETCH_USER_FAILURE':
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};
