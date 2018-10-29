import { UserService } from '../Services/UserService';
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from '../Constants/actionTypes';

// export const addUser = data => {
//   return {
//     type: 'ADD_USER',
//     data
//   };
// };

// export const fetchAddUser = user => {
//   return (dispatch, getState) => {
//     let state = getState();
//     let data = state.data;
//     data.push({
//       id: data.length + 1,
//       name: user.name,
//       username: user.username,
//       email: user.email,
//       website: user.website
//     });
//     dispatch(addUser(data));
//   };
// };

// export const listUser = data => {
//   return {
//     type: 'LIST_USER',
//     data
//   };
// };

// export const fetchListUserFailure = error => ({
//   type: 'FETCH_LIST_USER_FAILURE',
//   error
// });

// export const fetchListUser = () => {
//   return dispatch => {
//     UserService.get()
//       .then(response => {
//         const data = response.data;
//         dispatch(listUser(data));
//       })
//       .catch(error => {
//         dispatch(fetchListUserFailure(error));
//       });
//   };
// };

// export const removeUser = id => {
//   return {
//     type: 'REMOVE_USER',
//     id
//   };
// };

export const fetchUsersRequest = () => ({
  type: 'FETCH_USERS_REQUEST'
});

export const fetchUsersSuccess = user => ({
  type: 'FETCH_USERS_SUCCESS',
  user
});

export const fetchUsersFailure = () => ({
  type: 'FETCH_USERS_FAILURE'
});

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersRequest());
    UserService.get()
      .then(response => {
        const data = response.data;
        dispatch(fetchUsersSuccess(data));
      })
      .catch(() => {
        dispatch(fetchUsersFailure());
      });
  };
};
