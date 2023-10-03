import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"

// const firebaseConfig = {
//   apiKey: "AIzaSyDNdCbULE5QCYGqtF5MJPQOXTUFPQOA4FY",
//   authDomain: "connect-and-collabs-test-env.firebaseapp.com",
//   projectId: "connect-and-collabs-test-env",
//   storageBucket: "connect-and-collabs-test-env.appspot.com",
//   messagingSenderId: "276868562848",
//   appId: "1:276868562848:web:eef137fa82eb066501aec5",
//   measurementId: "G-QDXBVHL0T7",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCDHX3e2cPcocv7jJAcMxBmJe86dPgIg1M",
//   authDomain: "creators-dev-test-env.firebaseapp.com",
//   projectId: "creators-dev-test-env",
//   storageBucket: "creators-dev-test-env.appspot.com",
//   messagingSenderId: "689025838929",
//   appId: "1:689025838929:web:de5a918e9520d826a76d70",
//   measurementId: "G-9S7YWD83SX"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDDazxMd4AmlH3qzYEWW7-Yz3QaBFVDtkY",
  authDomain: "creators-dev-prod.firebaseapp.com",
  projectId: "creators-dev-prod",
  storageBucket: "creators-dev-prod.appspot.com",
  messagingSenderId: "390715510433",
  appId: "1:390715510433:web:2b7931fe84500852f06ae0",
  measurementId: "G-9R0G0MS7N9"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBRasxANzc2KCCd49ccDNrmEe2GGGqsNJM",
//   authDomain: "connect-and-collabs-prod.firebaseapp.com",
//   projectId: "connect-and-collabs-prod",
//   storageBucket: "connect-and-collabs-prod.appspot.com",
//   messagingSenderId: "443230918820",
//   appId: "1:443230918820:web:0cd50e58b5c4ac08edee31",
//   measurementId: "G-VB5QDGTNRB"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyA-ei7LFEK4JJo2IXFhghaNy9rxpE81e5Y",
//   authDomain: "sdhh-f3dc4.firebaseapp.com",
//   databaseURL: "https://sdhh-f3dc4-default-rtdb.firebaseio.com",
//   projectId: "sdhh-f3dc4",
//   storageBucket: "sdhh-f3dc4.appspot.com",
//   messagingSenderId: "311095208478",
//   appId: "1:311095208478:web:875ed30790fe3a6ed15c0f",
// };

// const FirebaseConfig = {
//   apiKey: "AIzaSyCRTytnGd-7dPdYlAJrp1jUFZIbN4O8jsA",
//   authDomain: "authentication-cfbcf.firebaseapp.com",
//   projectId: "authentication-cfbcf",
//   storageBucket: "authentication-cfbcf.appspot.com",
//   messagingSenderId: "711698507115",
//   appId: "1:711698507115:web:d6b91e7e8c3ac82c3dd82e",
//   measurementId: "G-RV4ZM8HRFX"
// };

// const apps = initializeApp(FirebaseConfig);


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)
export { db };
