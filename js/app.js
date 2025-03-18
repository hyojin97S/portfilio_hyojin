import { db, ref, set, onValue, remove } from './firebase.js';

// 수정 모드 변수
let editMode = false;
let editMessageId = null;

// 메시지 전송 폼 이벤트 리스너
document.addEventListener("DOMContentLoaded", function () {
  displayMessages();  // 페이지가 로드될 때 메시지 불러오기

  document.getElementById('guestbook').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name.trim() && message.trim()) {
      const messageObj = {
        name,
        message,
        date: new Date().toLocaleString(),
        id: editMessageId || Date.now()  // 수정 시 기존 id 사용, 새 메시지는 새 id
      };

      // Firebase에 메시지 저장
      saveMessageToFirebase(messageObj);
      resetForm();
    } else {
      alert("이름과 메시지를 모두 입력해주세요.");  // 이름과 메시지를 입력하지 않으면 경고
    }
  });

  // Firebase에 메시지 저장하는 함수
  function saveMessageToFirebase(messageObj) {
    const newMessageRef = ref(db, 'messages/' + messageObj.id);
    set(newMessageRef, messageObj)  // Firebase에 메시지를 저장
      .then(() => {
        console.log('Message saved successfully');
        displayMessages();  // 저장 후 메시지 목록 갱신
      })
      .catch((error) => {
        console.error('Error saving message:', error);
      });
  }

  // Firebase에서 메시지 가져오는 함수
  function displayMessages() {
    const messagesList = document.getElementById('messages_list');
    messagesList.innerHTML = '';  // 리스트 초기화

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
            <button class="edit" onclick="editMessage('${key}')">수정</button>
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
    remove(messageRef)  // Firebase에서 해당 메시지만 삭제
      .then(() => {
        console.log('Message deleted successfully');
        displayMessages();  // 메시지 목록 갱신
      })
      .catch((error) => {
        console.error('Error deleting message:', error);
      });
  };

  // 폼 리셋 함수
  function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';

    // 수정 모드 해제
    editMode = false;
    editMessageId = null;
  }
});