import { UserService } from '../Services/UserService';

export const fetchUserFailure = error => ({
  type: 'FETCH_USER_FAILURE',
  error
});

export const listUser = data => {
  return {
    type: 'LIST_USER',
    data
  };
};

export const fetchUser = () => {
  return dispatch => {
    UserService.get()
      .then(response => {
        const data = response.data;
        dispatch(listUser(data));
      })
      .catch(error => {
        dispatch(fetchUserFailure(error));
      });
  };
};
