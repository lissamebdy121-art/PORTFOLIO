// firebase-config.js
// Importation des modules Firebase nécessaires
import { initializeApp }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA4ayalTyaq8TvIPWTFsf7qAJHhG6KI08",
  authDomain: "portfolio-lissa-mendy.firebaseapp.com",
  projectId: "portfolio-lissa-mendy",
  storageBucket: "portfolio-lissa-mendy.firebasestorage.app",
  messagingSenderId: "130694980373",
  appId: "1:130694980373:web:83a57e905b84e111d2bf1c"
};

 
// Initialiser Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);
