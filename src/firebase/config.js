import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAhrr9qYyngkCZ4x0k1ub-UdqAI1J5YxYE",
    authDomain: "myhealthmobile-a3183.firebaseapp.com",
    projectId: "myhealthmobile-a3183",
    storageBucket: "myhealthmobile-a3183.appspot.com",
    messagingSenderId: "515732270667",
    appId: "1:515732270667:web:ce2b24d92d5111501667ce"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const storage = getStorage(app)

const auth = getAuth(app)

export {auth, db, storage }

