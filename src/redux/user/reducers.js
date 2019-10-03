import {
  ADD_USER_NAME_START,
  ADD_USER_NAME_SUCCESS,
  ADD_USER_NAME_ERROR,
  CLEAR_USER_NAME,
  FETCH_USER_NAME_START,
  FETCH_USER_NAME_SUCCESS,
  FETCH_USER_NAME_ERROR
} from "./actionTypes";

const initState = {
  loading: false,
  error: "",
  user: []
};

export const user = (state = initState, action) => {
  switch (action.type) {
    // aktualizacja imienia użytkownika
    case ADD_USER_NAME_START:
      return {
        ...state,
        loading: true
      };

    case ADD_USER_NAME_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        user: action.payload
      };

    case ADD_USER_NAME_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case CLEAR_USER_NAME:
      return {
        user: []
      };

    case FETCH_USER_NAME_START:
      return {
        ...state,
        loading: true
      };

    case FETCH_USER_NAME_SUCCESS:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};
