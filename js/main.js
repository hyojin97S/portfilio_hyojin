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



// Firebase 초기화
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// 기존 로컬 저장소와 Firebase 데이터 결합
document.addEventListener("DOMContentLoaded", function () {
  displayMessages();  // Firebase 또는 localStorage에 저장된 메시지 표시

  // 방명록 폼 제출 이벤트
  document.getElementById('guestbook').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
      const messageObj = {
        name,
        message,
        date: new Date().toLocaleString(),
        id: Date.now()
      };

      // Firebase에 메시지 추가
      const messagesRef = database.ref('messages');
      messagesRef.push(messageObj);  // Firebase에 메시지 추가

      // LocalStorage에 저장
      const messages = getMessages();
      messages.push(messageObj);
      saveMessages(messages);  // 로컬 저장소에 메시지 저장

      resetForm();
    } else {
      alert("이름과 메시지를 모두 입력해주세요.");
    }
  });

  // Firebase에서 메시지 불러오기
  function displayMessages() {
    const messagesList = document.getElementById('messages_list');
    messagesList.innerHTML = '';

    // Firebase에서 메시지를 읽어오기
    const messagesRef = database.ref('messages');
    messagesRef.on('child_added', function(snapshot) {
      const msg = snapshot.val();
      const messageItem = document.createElement('li');
      messageItem.innerHTML = `
        <div class="text">
          <strong>${msg.name}</strong>
          <p>${msg.date}</p>
        </div>
        <p class="msg">${msg.message}</p>
        <button class="delete" onclick="deleteMessage('${snapshot.key}')">삭제</button>
        <button class="edit" onclick="editMessage('${snapshot.key}')">수정</button>
      `;
      messagesList.appendChild(messageItem);
    });

    // 로컬 저장소에 있는 메시지 불러오기
    getMessages().forEach(msg => {
      const messageItem = document.createElement('li');
      messageItem.innerHTML = `
        <div class="text">
          <strong>${msg.name}</strong>
          <p>${msg.date}</p>
        </div>
        <p class="msg">${msg.message}</p>
        <button class="delete" onclick="deleteMessage(${msg.id})">삭제</button>
        <button class="edit" onclick="editMessage(${msg.id})">수정</button>
      `;
      messagesList.appendChild(messageItem);
    });
  }

  window.editMessage = function(id) {
    const messages = getMessages();
    const message = messages.find(msg => msg.id === id);
    document.getElementById('name').value = message.name;
    document.getElementById('message').value = message.message;
    deleteMessage(id);
  };

  window.deleteMessage = function(id) {
    const messagesRef = database.ref('messages/' + id);
    messagesRef.remove();  // Firebase에서 삭제

    // 로컬 저장소에서 삭제
    const messages = getMessages().filter(msg => msg.id !== id);
    saveMessages(messages);

    displayMessages();  // 업데이트된 메시지 목록 다시 표시
  };

  // 로컬 저장소에서 메시지 가져오기
  function getMessages() {
    return JSON.parse(localStorage.getItem('messages')) || [];
  }

  // 로컬 저장소에 메시지 저장하기
  function saveMessages(messages) {
    localStorage.setItem('messages', JSON.stringify(messages));
  }

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

