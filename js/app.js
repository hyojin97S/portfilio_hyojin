import { db, ref, set, onValue } from './firebase.js';

// 수정 모드 변수
let editMode = false;
let editMessageId = null;

// 메시지 전송 폼 이벤트 리스너
document.getElementById('guestbook').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  if (name && message) {
    const messageObj = {
      name,
      message,
      date: new Date().toLocaleString(),
      id: editMessageId || Date.now()  // 수정 모드에서는 기존 ID 사용
    };

    // Firebase에 메시지 저장
    saveMessageToFirebase(messageObj);
    resetForm();
  } else {
    alert("이름과 메시지를 모두 입력해주세요.");
  }
});

// Firebase에 메시지 저장하는 함수
function saveMessageToFirebase(messageObj) {
  const newMessageRef = ref(db, 'messages/' + messageObj.id);
  set(newMessageRef, messageObj);  // Firebase Realtime Database에 저장
}

// 메시지를 Firebase에서 가져오는 함수
function displayMessages() {
  const messagesList = document.getElementById('messages_list');
  messagesList.innerHTML = '';

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
          <button class="edit" onclick="editMessage('${key}')">수정</button>
          <button class="delete" onclick="deleteMessage('${key}')">삭제</button>
        `;
        messagesList.appendChild(messageItem);
      });
    }
  });
}

// 수정 버튼 클릭 시 처리
window.editMessage = function(key) {
  const messagesRef = ref(db, 'messages/' + key);
  onValue(messagesRef, (snapshot) => {
    const message = snapshot.val();
    if (message) {
      document.getElementById('name').value = message.name;
      document.getElementById('message').value = message.message;

      // 수정 모드 활성화
      editMode = true;
      editMessageId = key;
    }
  });
};

// 삭제 버튼 클릭 시 처리
window.deleteMessage = function(key) {
  const messageRef = ref(db, 'messages/' + key);
  set(messageRef, null)  // Firebase에서 해당 메시지 삭제
    .then(() => {
      console.log('Message deleted successfully');
      displayMessages();  // 메시지 목록 갱신
    })
    .catch((error) => {
      console.error('Error deleting message:', error);
    });
};

// 페이지가 로드되면 Firebase에서 메시지 표시
window.addEventListener("load", displayMessages);

// 폼 리셋 함수
function resetForm() {
  document.getElementById('name').value = '';
  document.getElementById('message').value = '';

  // 수정 모드 해제
  editMode = false;
  editMessageId = null;
}
