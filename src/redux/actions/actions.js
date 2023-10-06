import { GET_USER, GET_USER_FAIL, GET_USER_SUCCESS } from "./actionTypes";

const getUser = () => {
  return {
    type: GET_USER,
  };
};
const getUserSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: user,
  };
};
const getUserFail = (error) => {
  return {
    type: GET_USER_FAIL,
    payload: error,
  };
};

export { getUser, getUserFail, getUserSuccess };
