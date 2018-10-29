import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from '../Constants/actionTypes';

export interface UserState {
  isFetching: boolean;
  error: boolean;
  user: any;
}

const initialStateUser = {
  isFetching: true,
  user: [],
  error: false
};

export const users = (state: UserState = initialStateUser, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        isFetching: true
      };
    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        error: false,
        user: action.user
      };
    default:
      return state;
  }
};
