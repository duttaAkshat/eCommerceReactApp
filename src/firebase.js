import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDauojwjoH8_2Y1HkqbBSiKDCMIGvHL-LA",
  authDomain: "challenge-3b21d.firebaseapp.com",
  projectId: "challenge-3b21d",
  storageBucket: "challenge-3b21d.appspot.com",
  messagingSenderId: "109406468286",
  appId: "1:109406468286:web:d06c8981d7d2c53d8b46ef",
  measurementId: "G-TKSBJ7WJRV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User registered successfully:", user);
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error; // Re-throw the error for further handling, if needed
  }
};

export { auth, register };
