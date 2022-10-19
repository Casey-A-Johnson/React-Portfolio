import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBCZASo1BKRSD265yMsowiyub4HFS1ViPE',
  authDomain: 'react-portfolio-dashboar-6d9f2.firebaseapp.com',
  projectId: 'react-portfolio-dashboar-6d9f2',
  storageBucket: 'react-portfolio-dashboar-6d9f2.appspot.com',
  messagingSenderId: '1016491839482',
  appId: '1:1016491839482:web:3e6917d3f7e3d4730c9e43',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
