import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: process.env.VUE_APP_FIREBASE_KEY,
    projectId: process.env.VUE_APP_FIREBASE_ID
  })
  .firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
