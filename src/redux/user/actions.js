import {
  ADD_USER_NAME_START,
  ADD_USER_NAME_SUCCESS,
  ADD_USER_NAME_ERROR,
  CLEAR_USER_NAME,
  FETCH_USER_NAME_START,
  FETCH_USER_NAME_SUCCESS,
  FETCH_USER_NAME_ERROR
} from "./actionTypes";

// dodawanie i aktualizowanie imienia użytkownika

export const AddUserNameStart = () => {
  return {
    type: ADD_USER_NAME_START
  };
};
export const AddUserNameSuccess = (payload) => {
  return {
    type: ADD_USER_NAME_SUCCESS,
    payload
  };
};
export const AddUserNameError = (payload) => {
  return {
    type: ADD_USER_NAME_ERROR,
    payload
  };
};

export const updateUserName = (name) => (dispatch) => {
  dispatch(AddUserNameStart());

  fetch(`http://localhost:3000/user`, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: "PATCH",
    body: JSON.stringify({ name: name })
  })
    .then((resp) => resp.json())
    .then((user) => dispatch(AddUserNameSuccess(user)))
    .catch((error) => dispatch(AddUserNameError(error)));
};

export const clearUserName = () => {
  return {
    type: CLEAR_USER_NAME
  };
};

//

export const fetchUserNameStart = () => ({ type: FETCH_USER_NAME_START });
export const fetchUserNameSuccess = (payload) => ({
  type: FETCH_USER_NAME_SUCCESS,
  payload
});
export const fetchUserNameError = (payload) => ({
  type: FETCH_USER_NAME_ERROR,
  payload
});

export const getUserName = () => (dispatch) => {
  dispatch(fetchUserNameStart());

  fetch(`http://localhost:3000/user`)
    .then((resp) => resp.json())
    .then((user) => dispatch(fetchUserNameSuccess(user)))
    .catch((error) => dispatch(fetchUserNameError(error)));
};
