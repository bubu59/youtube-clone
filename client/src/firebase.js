import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAmShBLAc_Be1jHlxtHrNl81T38ZGR84gs",
    authDomain: "clone-1f468.firebaseapp.com",
    projectId: "clone-1f468",
    storageBucket: "clone-1f468.appspot.com",
    messagingSenderId: "760781684841",
    appId: "1:760781684841:web:ccb2ebacfe71047eafa2f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app 