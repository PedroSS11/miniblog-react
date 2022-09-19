import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDcADf2oc-8eMIIIZvzm7HDMvoM1-bVlOg",
  authDomain: "miniblog-8e300.firebaseapp.com",
  projectId: "miniblog-8e300",
  storageBucket: "miniblog-8e300.appspot.com",
  messagingSenderId: "756344606099",
  appId: "1:756344606099:web:c162d13ce27a1e17a9ec66"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};