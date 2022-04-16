// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCG50HngjMv6aHhDhSfNHsQKrjlYZuCAAk',
  authDomain: 'netflix-clone-yt-a03e1.firebaseapp.com',
  projectId: 'netflix-clone-yt-a03e1',
  storageBucket: 'netflix-clone-yt-a03e1.appspot.com',
  messagingSenderId: '661054407358',
  appId: '1:661054407358:web:dda7bef20e1b861c1cd4ef',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
