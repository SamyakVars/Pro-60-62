import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBhGxPF-ilf6PwznOsgKaTZRPsy-cwRLeY",
  authDomain: "pro-60-f79bf.firebaseapp.com",
  projectId: "pro-60-f79bf",
  storageBucket: "pro-60-f79bf.appspot.com",
  messagingSenderId: "288317637551",
  appId: "1:288317637551:web:a212a58995bdd81bd4e55a"
};

let app = firebase.initializeApp(firebaseConfig);
export default app.database()

 

  