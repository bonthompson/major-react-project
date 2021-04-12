import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCx1qpfUoeOaQg_tbTEWj1qBXyzR5MlmVc',
  authDomain: 'major-react-project.firebaseapp.com',
  projectId: 'major-react-project',
  storageBucket: 'major-react-project.appspot.com',
  messagingSenderId: '55391252947',
  appId: '1:55391252947:web:22bb54bd8ccbc8f5c4ff26',
  measurementId: 'G-CZ63J3WNS4'
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// google auth
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
