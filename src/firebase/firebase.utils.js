import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBjX5er0RwpJtsfGLnJCgGu918BIYyZnX0",
  authDomain: "udemy-react-ecom.firebaseapp.com",
  databaseURL: "https://udemy-react-ecom.firebaseio.com",
  projectId: "udemy-react-ecom",
  storageBucket: "",
  messagingSenderId: "644499376737",
  appId: "1:644499376737:web:af97762e5ee5096a7db820",
  measurementId: "G-YVN1CYY4Q7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth.uid);

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  console.log(snapshot);
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
