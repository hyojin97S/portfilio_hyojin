//실시간 시계
function currentTime() {
  const date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;

  const time = session + hh + ":" + mm;

  document.getElementById("clock").innerText = time; 
  setTimeout(() => currentTime(), 1000);
}
currentTime();


// 날짜
function formatDate(date) {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
  const day = date.getDate();
  const weekday = daysOfWeek[date.getDay()]; // 요일

  return `${year}년 ${month}월 ${day}일 ${weekday}요일`;
}
function displayCurrentDate() {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  document.getElementById('current-date').textContent = formattedDate;
}

window.onload = displayCurrentDate;


// 시계 호버시 보이게 하기
$(function() {
  $("#clock").hover(function() {
    $(".date-container").fadeIn(1000);
  }, function() {
    $(".date-container").fadeOut(300); 
  });
});


// 시작 메뉴
$(function(){
  $(".btn").on("click", function(){
    $(".window").toggle(); 
  });
});



// 내 정보
$('.list_1 img').click(function(){
	$('.list_1').css("width", "70px");
	$('.list_1').css("border", "1px dotted lightblue");

});

// 아이콘 border
$(function(){
  $(".btn1").on("click",function(){
  $(".list_1").css("border", "none");
  })
});

$(function(){
  $(".list_1").on("dblclick",function(){
  $(".modal").show();
  })
  $(".btn1").on("click",function(){
      $(".modal").hide();
    })
});

// 작은 창 닫기
  $(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('modal') === 'true') {
      $('.modal').fadeIn(); 
    }

    $('.btn1').on('click', function() {
      var newUrl = window.location.href.split('?')[0]; 
      window.history.replaceState({}, document.title, newUrl); 
      $('.modal').fadeOut(); 
    });
  });

// 반응형 내 정보
const modal = document.querySelector(".modal");
const aboutMeLink = document.querySelector("li a[href='./aboutMe.html']");
const closeBtn = document.querySelector(".btn1");
const windowMenu = document.querySelector(".window");

// "내 정보" 클릭 시 모달 보이고 원도우 메뉴 숨기기
aboutMeLink.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display = "block";
  windowMenu.style.display = "none";
});

// "엑스" 버튼 클릭 시 모달 닫기
closeBtn.addEventListener("click", function() {
  modal.style.display = "none"; 
});

// 반응형 상태에서만 "내 정보" 클릭 가능하게
window.addEventListener("resize", () => {
  aboutMeLink.style.pointerEvents = window.innerWidth <= 768 ? "auto" : "none";
});



// 기술
$('.list_2 img').click(function(){
  $('.list_2').css("width", "70px");
	$('.list_2').css("border", "1px dotted lightblue");
});

// 아이콘 border
$(function(){
  $(".btn1").on("click",function(){
  $(".list_2").css("border", "none");
  })
});

$(function(){
  $(".list_2").on("dblclick",function(){
  $(".modal_1").show();
  })
  $(".btn1").on("click",function(){
      $(".modal_1").hide();
    })
});

// 작은 창 닫기
$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('modal_1') === 'true') {
    $('.modal_1').fadeIn(); 
  }

  $('.btn1').on('click', function() {
    var newUrl = window.location.href.split('?')[0]; 
    window.history.replaceState({}, document.title, newUrl); 
    $('.modal_1').fadeOut(); 
  });
});

// 반응형 윈도우 메뉴 "기술"
const modal1 = document.querySelector(".modal_1");  
const skillsLink = document.querySelector("li a[href='./SKILLS.html']");  
const closeBtn1 = document.querySelector(".modal_1 .btn1");  
const windowMenu1 = document.querySelector(".window"); 

// "기술" 클릭 시 modal_1 보이고 원도우 메뉴 숨기기
skillsLink.addEventListener("click", function(event) {
  event.preventDefault();
  modal1.style.display = "block";  
  windowMenu1.style.display = "none";  
});

// "엑스" 버튼 클릭 시 modal_1 닫기
closeBtn1.addEventListener("click", function() {
  modal1.style.display = "none"; 
});

// 반응형 상태에서만 "기술" 클릭 가능하게
window.addEventListener("resize", () => {
  skillsLink.style.pointerEvents = window.innerWidth <= 768 ? "auto" : "none";
});



// 프로젝트
$('.list_3 img').click(function(){
  $('.list_3').css("width", "70px");
	$('.list_3').css("border", "1px dotted lightblue");
});

$(function(){
  $(".btn1").on("click",function(){
  $(".list_3").css("border", "none");
  })
});

$(function(){
  $(".list_3").on("dblclick",function(){
  $(".modal_2").show();
  })
  $(".btn1").on("click",function(){
      $(".modal_2").hide();
    })
});

// 작은 창 닫기
$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('modal_2') === 'true') {
    $('.modal_2').fadeIn(); 
  }

  $('.btn1').on('click', function() {
    var newUrl = window.location.href.split('?')[0]; 
    window.history.replaceState({}, document.title, newUrl); 
    $('.modal_2').fadeOut(); 
  });
});


// 반응형 윈도우 메뉴 "프로젝트"
const modal2 = document.querySelector(".modal_2");  
const projectsLink = document.querySelector("li a[href='./project.html']");  
const closeBtn2 = document.querySelector(".modal_2 .btn1");  
const windowMenu2 = document.querySelector(".window");  

// "프로젝트" 클릭 시 modal_2 보이고 원도우 메뉴 숨기기
projectsLink.addEventListener("click", function(event) {
  event.preventDefault();
  modal2.style.display = "block";  
  windowMenu2.style.display = "none";  
});

// "엑스" 버튼 클릭 시 modal_2 닫기
closeBtn2.addEventListener("click", function() {
  modal2.style.display = "none";  
});

// 반응형 상태에서만 "프로젝트" 클릭 가능하게
window.addEventListener("resize", () => {
  projectsLink.style.pointerEvents = window.innerWidth <= 768 ? "auto" : "none";
});



// 메시지
$('.list_4 img').click(function(){
  $('.list_4').css("width", "70px");
	$('.list_4').css("border", "1px dotted lightblue");
});

$(function(){
  $(".btn1").on("click",function(){
  $(".list_4").css("border", "none");
  })
});

$(function(){
  $(".list_4").on("dblclick",function(){
  $(".modal_3").show();
  })
  $(".btn1").on("click",function(){
      $(".modal_3").hide();
    })
});

$(".guestbook, #messages_list").on("click", function(event){
  event.stopPropagation();
});

// 작은 창 닫기
$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('modal_3') === 'true') {
    $('.modal_3').fadeIn(); 
  }

  $('.btn1').on('click', function() {
    var newUrl = window.location.href.split('?')[0]; 
    window.history.replaceState({}, document.title, newUrl); 
    $('.modal_3').fadeOut(); 
  });
});


// 반응형 윈도우 메뉴 "메시지"
const modal3 = document.querySelector(".modal_3");  
const contactLink = document.querySelector("li a[href='./contact.html']");
const closeBtn3 = document.querySelector(".modal_3 .btn1");  
const windowMenu3 = document.querySelector(".window"); 

// "메시지" 클릭 시 modal_3 보이고 원도우 메뉴 숨기기
contactLink.addEventListener("click", function(event) {
  event.preventDefault();
  modal3.style.display = "block";  
  windowMenu3.style.display = "none";  
});

// "엑스" 버튼 클릭 시 modal_3 닫기
closeBtn3.addEventListener("click", function() {
  modal3.style.display = "none";  
});

// 반응형 상태에서만 "메시지" 클릭 가능하게
window.addEventListener("resize", () => {
  contactLink.style.pointerEvents = window.innerWidth <= 768 ? "auto" : "none";
});


// 방명록
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js';
import { getDatabase, ref, push, set, onChildAdded, remove, get, onChildRemoved } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js';

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyAaSybKMqwOIr4ODtCWG6-Wb_Ufvqv_Z1k",
  authDomain: "guest-book-3acdd.firebaseapp.com",
  databaseURL: "https://guest-book-3acdd-default-rtdb.firebaseio.com",
  projectId: "guest-book-3acdd",
  storageBucket: "guest-book-3acdd.firebasestorage.app",
  messagingSenderId: "559383552501",
  appId: "1:559383552501:web:4c5143c0666332580040bc",
  measurementId: "G-BNR8NWDHX2"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.addEventListener("DOMContentLoaded", function () {
  // 방명록 폼 제출 처리
  document.getElementById('guestbook').addEventListener('submit', function (event) {
    event.preventDefault(); // 새로고침 방지

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
      const messageObj = {
        name,
        message,
        date: new Date().toLocaleString(),
      };

      // Firebase에 메시지 저장
      const messagesRef = ref(database, 'messages');
      const newMessageRef = push(messagesRef);
      set(newMessageRef, messageObj).then(() => {
        resetForm(); // 폼 초기화
      }).catch((error) => {
        alert('메시지 전송 실패: ' + error.message);
      });
    } else {
      alert("이름과 메시지를 모두 입력해주세요.");
    }
  });

  // Firebase에서 방명록 메시지를 실시간으로 가져오기
  const messagesRef = ref(database, 'messages');

  // 메시지 추가 시 실시간으로 화면에 반영
  onChildAdded(messagesRef, function(snapshot) {
    const msg = snapshot.val();
    const messageItem = document.createElement('li');
    messageItem.id = snapshot.key; // 메시지에 고유 ID를 부여하여 삭제 시 활용
    messageItem.innerHTML = `
      <div class="text">
        <strong>${msg.name}</strong>
        <p>${msg.date}</p>
      </div>
      <p class="msg">${msg.message}</p>
      <div class="message-actions">
        <button class="delete" data-id="${snapshot.key}">삭제</button>
        <button class="edit" data-id="${snapshot.key}">수정</button>
      </div>
    `;
    document.getElementById('messages_list').appendChild(messageItem);
  });

  // 메시지 삭제 시 실시간으로 반영
  onChildRemoved(messagesRef, function(snapshot) {
    const messageItem = document.getElementById(snapshot.key);
    if (messageItem) {
      messageItem.remove(); // 삭제된 메시지를 화면에서 바로 제거
    }
  });

  // 수정 버튼 클릭 시 동작
  document.getElementById('messages_list').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('edit')) {
      const messageId = event.target.getAttribute('data-id');
      editMessage(messageId);
    }
  });

  // 삭제 버튼 클릭 시 동작
  document.getElementById('messages_list').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('delete')) {
      const messageId = event.target.getAttribute('data-id');
      deleteMessage(messageId);
    }
  });

  // 메시지 수정 함수
  function editMessage(messageId) {
    const messageRef = ref(database, 'messages/' + messageId);
    get(messageRef).then(function(snapshot) {
      const msg = snapshot.val();
      document.getElementById('name').value = msg.name;
      document.getElementById('message').value = msg.message;

      // 수정할 때 포커스를 자동으로 설정
      document.getElementById('name').focus(); // 이름 입력 필드에 포커스
      document.getElementById('message').focus(); // 메시지 입력 필드에 포커스

      // 폼 제출 시 수정 처리
      const formSubmit = function editSubmit(event) {
        event.preventDefault(); // 새로고침 방지

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        if (name && message) {
          const updatedMessage = {
            name,
            message,
            date: new Date().toLocaleString(),
          };

          // Firebase에서 메시지 수정 (기존 메시지 위치에서 업데이트)
          set(messageRef, updatedMessage).then(() => {
            resetForm(); // 폼 초기화
            document.getElementById('guestbook').removeEventListener('submit', formSubmit); // 수정 완료 후 이벤트 리스너 제거
          }).catch((error) => {
            alert('메시지 수정 실패: ' + error.message);
          });
        } else {
          alert("이름과 메시지를 모두 입력해주세요.");
        }
      };

      // 수정 이벤트 리스너 추가
      document.getElementById('guestbook').addEventListener('submit', formSubmit);
    });
  }

  // 메시지 삭제 함수
  function deleteMessage(messageId) {
    const messageRef = ref(database, 'messages/' + messageId);
    remove(messageRef).then(() => {
      // 삭제 후 실시간으로 목록에서 삭제된 메시지 자동 반영
    }).catch((error) => {
      alert('메시지 삭제 실패: ' + error.message);
    });
  }

  // 폼 초기화 함수
  function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
  }
});


// 인터넷 github
$('.list_5 img').click(function(){
  $('.list_5').css("width", "70px");
	$('.list_5').css("border", "1px dotted lightblue");
});

document.querySelector(".list_5").addEventListener("dblclick", function() {
  window.location.href = "https://github.com/hyojin97S";
});


// 휴지통
$('.list_6 img').click(function(){
  $('.list_6').css("width", "70px");
	$('.list_6').css("border", "1px dotted lightblue");
});

$(function(){
  $(".btn1").on("click",function(){
  $(".list_6").css("border", "none");
  })
});

$(function(){
  $(".list_6").on("dblclick",function(){
  $(".modal_4").show();
  })
  $(".btn1").on("click",function(){
      $(".modal_4").hide();
    })
});

// 작은 창 닫기
$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('modal_4') === 'true') {
    $('.modal_4').fadeIn(); 
  }

  $('.btn1').on('click', function() {
    var newUrl = window.location.href.split('?')[0]; 
    window.history.replaceState({}, document.title, newUrl); 
    $('.modal_4').fadeOut(); 
  });
});

// 반응형 윈도우 메뉴 "휴지통"
const modal4 = document.querySelector(".modal_4");  
const recycleBinLink = document.querySelector("li a[href='./recycleBin.html']");
const closeBtn4 = document.querySelector(".modal_4 .btn1"); 
const windowMenu4 = document.querySelector(".window");  

// "휴지통" 클릭 시 modal_4 보이고 원도우 메뉴 숨기기
recycleBinLink.addEventListener("click", function(event) {
  event.preventDefault();
  modal4.style.display = "block";  
  windowMenu4.style.display = "none"; 
});

// "엑스" 버튼 클릭 시 modal_4 닫기
closeBtn4.addEventListener("click", function() {
  modal4.style.display = "none";
});

// 반응형 상태에서만 "휴지통" 클릭 가능하게
window.addEventListener("resize", () => {
  recycleBinLink.style.pointerEvents = window.innerWidth <= 768 ? "auto" : "none";
});

