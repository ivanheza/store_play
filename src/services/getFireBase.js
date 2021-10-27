import firebase from "firebase"

import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyB_1LKv8LrWn2Awzaz_NfgVzMq3go07rQw",
  authDomain: "proyectocoder-2b35f.firebaseapp.com",
  projectId: "proyectocoder-2b35f",
  storageBucket: "proyectocoder-2b35f.appspot.com",
  messagingSenderId: "20581942499",
  appId: "1:20581942499:web:61f620800e1dbbe67271d6"
};


const app = firebase.initializeApp(firebaseConfig)


// export function getFirebase(){
//     return app
// }

export function getFirestore(){    
    return firebase.firestore(app)
}