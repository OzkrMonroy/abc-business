import { createUserDocument, signupWithEmail } from "../../server/firebaseHelper";
import UserTypes from "./userTypes";

// Register
export const registerUserStart = () => ({
  type: UserTypes.REGISTER_USER_START
})

export const registerUserSucces = (user: {}) => ({
  type: UserTypes.REGISTER_USER_SUCCESS,
  payload: user
})

export const registerUserFailure = (errorMessage: string) => ({
  type: UserTypes.REGISTER_USER_FAILURE,
  payload: errorMessage
})

// Create
export const createUserProfileDocumentStart = (userAuth: any, additionalData: any) => {
  return async (dispatch: any) => {
    try {
      const userRef = await createUserDocument(userAuth, additionalData);
      const userSnapshot = await userRef?.get();
      console.log({id: userSnapshot?.id, ...userSnapshot?.data()});
      dispatch(registerUserSucces({id: userSnapshot?.id, ...userSnapshot?.data()}));
    } catch (error) {
      console.log(error);
      dispatch(registerUserFailure(error.message))
    }
  }
}


export const registerUserStartAsync = (email: string, password: string, additionalData: {}) => {
  return async (dispatch: any ) => {
    dispatch(registerUserStart());
    try {
      const { user } = await signupWithEmail(email, password);
      dispatch(createUserProfileDocumentStart(user, additionalData));
      console.log(user)
    } catch (error) {
      console.log(error);
      registerUserFailure('Error al crear usuario');
    }
  }
}