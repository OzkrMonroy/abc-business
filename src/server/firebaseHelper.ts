import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { ProviderInterface } from '../interfaces/ProviderInterface';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATA_BASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsuscribe = auth.onAuthStateChanged(userAuth => {
      unsuscribe();
      resolve(userAuth)
    }, reject)
  })
}

export const signupWithEmail = (email: string, password: string) => {
  return auth.createUserWithEmailAndPassword(email, password);
}

export const signInWithEmail = (email: string, password: string) => {
  return auth.signInWithEmailAndPassword(email, password);
}

export const signOut = () => {
  auth.signOut();
}

export const createUserDocument = async (userAuth: any, additionalData: any) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`Users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if(!userSnapshot.exists){
    const { displayName, email } = userAuth;
    const userCreatedAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        userCreatedAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
}

export const addProductToFirestore = (productData: {}) => {
  return firestore.collection('Products').doc().set(productData);
}

export const addProviderToFirestore = (providerData: ProviderInterface) => {
  return firestore.collection('Providers').doc(providerData.id).set(providerData);
}
export const getProvidersFromFirestore = () => {
  return firestore.collection('Providers').get();
}

export default firebase;