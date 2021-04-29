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
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createAt = new Date()
    // create user
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// google auth setup
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
