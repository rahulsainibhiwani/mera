import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_PROFILE_FAIL,
  ADMIN_PROFILE_REQUEST,
  ADMIN_PROFILE_SUCCESS,
} from "../constants/authConstants";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { loading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { loading: false, adminInfo: action.payload };
    case ADMIN_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_PROFILE_REQUEST:
      return { loading: true };
    case ADMIN_PROFILE_SUCCESS:
      return { loading: false, adminProfileInfo: action.payload };
    case ADMIN_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
