import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA0J12ExosLROB3c4OFzCm4bCqomg9pkqo",
    authDomain: "crux-300d0.firebaseapp.com",
    projectId: "crux-300d0",
    storageBucket: "crux-300d0.appspot.com",
    messagingSenderId: "551904266077",
    appId: "1:551904266077:web:660e175b587d4284ac0ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export async function addTrial(data) {
    const date = new Date();
    const docRef = doc(db, "trials", "sbfjeukShctZ5k5phI1L");
    setDoc(docRef, data).then(docRef => { console.log("Entire Document has been updated successfully"); })
        .catch(error => { console.log(error); });
}