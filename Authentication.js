import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyA080uFN6zIjNzOD00D8Fh2jWhwRvF2KuQ",
  authDomain: "trendx-plus-live.firebaseapp.com",
  projectId: "trendx-plus-live",
  storageBucket: "trendx-plus-live.appspot.com",
  messagingSenderId: "392793581695",
  appId: "1:392793581695:web:94e0ba9153c69afd23374a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();


const googleLogin = document.querySelectorAll('#google-service');
for(var i = 0; i < googleLogin.length; i++){
  googleLogin[i].addEventListener("click", function(){
  

    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user)
      window.location.href = "Trends.html"
      
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    
    });
  })
}
