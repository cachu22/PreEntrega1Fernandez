import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBrCEf0hT7J6uYvUr_34qni0uAlDpFM5wE",
  authDomain: "react-a14d7.firebaseapp.com",
  projectId: "react-a14d7",
  storageBucket: "react-a14d7.appspot.com",
  messagingSenderId: "905564093105",
  appId: "1:905564093105:web:c85989b8c508e0bd16c090"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, serverTimestamp };