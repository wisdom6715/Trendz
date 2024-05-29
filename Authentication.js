import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth, GoogleAuthProvider, signInWithPopup,
         onAuthStateChanged,
        createUserWithEmailAndPassword 
    } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getDatabase, ref, set 

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";  // Import Firebase Database

const firebaseConfig = {
  apiKey: "AIzaSyCgTP88-8BJm8T1U91Rmbk43DJtEuL3ZAU",
  authDomain: "trends-3850e.firebaseapp.com",
  projectId: "trends-3850e",
  storageBucket: "trends-3850e.appspot.com",
  messagingSenderId: "14946832597",
  appId: "1:14946832597:web:371d3025625c17b97b925c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

document.addEventListener("DOMContentLoaded", function() {
  const googleLogin = document.querySelector(".google-auth");
  if (googleLogin) {
    googleLogin.addEventListener("click", function() {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log(user);
          window.location.href = "Trends.html";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(`Error ${errorCode}: ${errorMessage}`);
        });
    });
  }

})

// signing upn usesr

/*const signupForm = document.querySelector('.signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm.email.value;
    const password = signupForm.password.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        console.log('User created:', cred.user);
        signupForm.reset();
    })
    .catch((err) => {
        console.log(err.message);
    });
});*/

// Signing up users
const signupForm = document.querySelector('.signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm.email.value;
    const password = signupForm.password.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('User created:', cred.user);
            signupForm.reset();
        })
        .catch((err) => {
            console.log(err.message);
        });
});
