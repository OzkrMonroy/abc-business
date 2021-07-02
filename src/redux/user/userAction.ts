import { createUserDocument, getCurrentUser, signInWithEmail, signOut, signupWithEmail } from "../../server/firebaseHelper";
import UserTypes from "./userTypes";

// Register
export const registerUserStart = () => ({
  type: UserTypes.REGISTER_USER_START
})

export const signInUserStart = () => ({
  type: UserTypes.SIGN_IN_USER_START
})

export const getUserDataSuccess = (user: {}) => ({
  type: UserTypes.GET_USER_DATA_SUCCESS,
  payload: user
})

export const getUserDataFailure = (errorMessage: string) => ({
  type: UserTypes.GET_USER_DATA_FAILURE,
  payload: errorMessage
})

export const userSignOutSuccess = () => ({
  type: UserTypes.USER_SIGN_OUT_SUCCESS
})

export const userSignOutFailure = (errorMessage: string) => ({
  type: UserTypes.USER_SIGN_OUT_FAILURE,
  payload: errorMessage
})

export const isCheckingSessionStart = () => ({
  type: UserTypes.CHECKING_USER_AUTH_START,
})
export const isCheckingSessionSuccess = () => ({
  type: UserTypes.CHECKING_USER_AUTH_SUCCESS,
})
export const isCheckingSessionFailure = () => ({
  type: UserTypes.CHECKING_USER_AUTH_FAILURE,
})

// Create
export const getSnapshotFromUserAuth = (userAuth: any, additionalData: any) => {
  return async (dispatch: any) => {
    try {
      const userRef = await createUserDocument(userAuth, additionalData);
      const userSnapshot = await userRef?.get();
      dispatch(getUserDataSuccess({id: userSnapshot?.id, ...userSnapshot?.data()}));
      dispatch(isCheckingSessionSuccess());
    } catch (error) {
      dispatch(getUserDataFailure(error.message))
      dispatch(isCheckingSessionFailure());
    }
  }
}


export const registerUserStartAsync = (email: string, password: string, additionalData: {}) => {
  return async (dispatch: any ) => {
    dispatch(registerUserStart());
    try {
      const { user } = await signupWithEmail(email, password);
      dispatch(getSnapshotFromUserAuth(user, additionalData));
    } catch (error) {
      dispatch(getUserDataFailure(error.message));
    }
  }
}

export const signInUserStartAsync = (email: string, password: string) => {
  return async (dispatch: any) => {
    dispatch(signInUserStart());
    try {
      const { user } = await signInWithEmail(email, password);
      dispatch(getSnapshotFromUserAuth(user, null))
    } catch (error) {
      dispatch(getUserDataFailure(error.message));
    }
  }
}

export const checkUserSession = () => {
  return async (dispatch: any) => {
    dispatch(isCheckingSessionStart());
    try {
      const userAuth = await getCurrentUser();
      if(!userAuth) {
        dispatch(isCheckingSessionFailure());  
        return
      };
      dispatch(getSnapshotFromUserAuth(userAuth, null));
    } catch (error) {
      dispatch(getUserDataFailure(error.message));
      dispatch(isCheckingSessionFailure());
    }
  }
}

export const signOutStartAsync = () => {
  return async (dispatch: any) => {
    try {
      await signOut();
      dispatch(userSignOutSuccess());
    } catch (error) {
      dispatch(userSignOutFailure(error.message));
    }
  }
}