import firebasa from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBiJPkcfluzPYDR_PgmLYmt3R_f32Rzv8o",
    authDomain: "image-community-a1d18.firebaseapp.com",
    projectId: "image-community-a1d18",
    storageBucket: "image-community-a1d18.appspot.com",
    messagingSenderId: "223899297690",
    appId: "1:223899297690:web:c775963b34b921c3a4fc23",
    measurementId: "G-SS8EGNRREC"
}

firebasa.initializeApp(firebaseConfig);
const apikey = firebaseConfig.apiKey;
const auth = firebasa.auth();

export{auth, apikey};