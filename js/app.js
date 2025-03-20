import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, set, onValue, remove } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

// Firebase 설정
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
const db = getDatabase(app);

// 메시지 목록을 화면에 표시하는 함수
function displayMessages() {
  const messagesList = document.getElementById('messages_list');
  messagesList.innerHTML = '';  // 기존 메시지 목록 초기화

  // Firebase에서 메시지 목록 가져오기
  const messagesRef = ref(db, 'messages');
  onValue(messagesRef, (snapshot) => {
    const messages = snapshot.val();
    if (messages) {
      Object.keys(messages).forEach(key => {
        const msg = messages[key];
        const messageItem = document.createElement('li');
        messageItem.innerHTML = `
          <div class="text">
            <strong>${msg.name}</strong>                
            <p>${msg.date}</p> 
          </div>
          <p class="msg">${msg.message}</p>
          <button class="delete" onclick="deleteMessage('${key}')">삭제</button>
        `;
        messagesList.appendChild(messageItem);
      });
    }
  });
}

// 방명록 폼을 제출했을 때 메시지 저장
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('guestbook').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name.trim() && message.trim()) {
      const messageObj = {
        name,
        message,
        date: new Date().toLocaleString(),
        id: Date.now()  // 각 메시지에 고유 ID 추가
      };

      saveMessageToFirebase(messageObj);
      resetForm();
    } else {
      alert("이름과 메시지를 모두 입력해주세요.");
    }
  });

  // Firebase에 메시지 저장
  function saveMessageToFirebase(messageObj) {
    const newMessageRef = ref(db, 'messages/' + messageObj.id);
    set(newMessageRef, messageObj)
      .then(() => {
        console.log('Message saved successfully');
        displayMessages();
      })
      .catch((error) => {
        console.error('Error saving message:', error);
      });
  }

  // 폼 리셋
  function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
  }

  // 메시지 삭제 함수
  window.deleteMessage = function(key) {
    const messageRef = ref(db, 'messages/' + key);
    remove(messageRef)
      .then(() => {
        console.log('Message deleted successfully');
        displayMessages();
      })
      .catch((error) => {
        console.error('Error deleting message:', error);
      });
  };

  // 페이지가 로드될 때 메시지 목록 표시
  displayMessages();
});
