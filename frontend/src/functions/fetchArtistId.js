import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export async function fetchArtistId(docId) {
    try {
        if(!firebase.apps.length) {
            await firebase.initializeApp(firebaseConfig);
        } else {
            await firebase.app()
        }

        let db = firebase.firestore();
        let doc;
        
        while(!doc) {
            doc = await db.collection('artists').doc(docId).get();
        }

        return doc.data();
        
    } catch(error) {
        console.error(error)
    }
}
