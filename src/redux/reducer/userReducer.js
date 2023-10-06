import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from "../actions/actionTypes";
const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        users: payload,
        isLoading: false,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
