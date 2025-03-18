// firebase.js

// Firebase SDK 가져오기 (Firebase 앱 및 데이터베이스 관련 기능)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, set, get, child, onValue } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

// Firebase 설정 (Firebase 콘솔에서 제공된 값 사용)
const firebaseConfig = {
  apiKey: "AIzaSyBnKx1X-Zv1ia-inRCOhvt3gL7711v7IeM",
  authDomain: "projects-6403f.firebaseapp.com",
  databaseURL: "https://projects-6403f-default-rtdb.firebaseio.com",
  projectId: "projects-6403f",
  storageBucket: "projects-6403f.firebasestorage.app",
  messagingSenderId: "575341885808",
  appId: "1:575341885808:web:796a79efa2e925b86c37b5",
  measurementId: "G-WNTDB53QRL"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Realtime Database 초기화
const db = getDatabase(app);

// Firebase 기능을 다른 파일에서 사용할 수 있도록 export
export { db, ref, set, get, child, onValue };
