import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('qGLfHpNLqwOgzLyZCd0N')
  .collection('cartItems')
  .doc('JlAPRfNJkEAY9JRyE95D');

firestore.doc('/users/qGLfHpNLqwOgzLyZCd0N/cartItems/JlAPRfNJkEAY9JRyE95D');
firestore.collection('/users/qGLfHpNLqwOgzLyZCd0N/cartItems');