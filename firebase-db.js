// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// incluir as configurações obtidas no firebase console 
//
const firebaseConfig = {
        apiKey: "AIzaSyDpctpkyTVjbB5JDisnb8ceritnrFpQCKs",
        authDomain: "usabilidade1310.firebaseapp.com",
        databaseURL: "https://usabilidade1310-default-rtdb.firebaseio.com",
        projectId: "usabilidade1310",
        storageBucket: "usabilidade1310.appspot.com",
        messagingSenderId: "627767609061",
        appId: "1:627767609061:web:9a93a4bfc2739c83cbf60c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database
