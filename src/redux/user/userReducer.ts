import UserTypes from "./userTypes";

interface UserState {
  user: {
    displayName: string;
    email: string;
    id: string;
    userCreatedAt: Date;
  } | null,
  error: boolean;
  isLoading: boolean;
  message: string | null;
}

const initialState = {
  user: null,
  error: false,
  isLoading: false,
  message: null,
}

const userReducer = (state: UserState = initialState, action: any): UserState => {
  switch (action.type) {
    case UserTypes.REGISTER_USER_START:
    case UserTypes.SIGN_IN_USER_START:
      return {
        ...state,
        isLoading: true,
        error: false,
        message: null,
      }
    case UserTypes.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: false,
      }
    case UserTypes.GET_USER_DATA_FAILURE:
      return {
        ...state,
        user: null,
        isLoading: false,
        error: true,
        message: action.payload,
      }
    case UserTypes.USER_SIGN_OUT_SUCCESS:
      return {
        ...state,
        user: null,
      }
    case UserTypes.USER_SIGN_OUT_FAILURE:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;