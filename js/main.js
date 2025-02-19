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

$(function() {
  $("#clock").on("click", function() {
    $(".date-container").toggle();
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
  $(".box0, .btn1").on("click",function(){
  $(".list_1").css("border", "none");
  })
});

$(function(){
  $(".about").on("dblclick",function(){
  $(".modal").show();
  })
  $(".box0").on("click",function(){
      $(".modal").hide();
    })
});

$(function(){
  $(".box").on("dblclick",function(){
    window.location.href = 'aboutMe.html';
  })
});

$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('modal') === 'true') {
      $('.modal').fadeIn(); 
  }
  $('.btn1').on('click', function() {
      $('.modal').fadeOut(); 
  });
});


// 기술
$('.list_2 img').click(function(){
  $('.list_2').css("width", "70px");
	$('.list_2').css("border", "1px dotted lightblue");
});

$(function(){
  $(".list2, .btn1").on("click",function(){
  $(".list_2").css("border", "none");
  })
});

$(function(){
  $(".skil").on("dblclick",function(){
  $(".modal_1").show();
  })
  $(".list2").on("click",function(){
      $(".modal_1").hide();
    })
});

$(function(){
  $(".list").on("dblclick",function(){
    window.location.href = 'SKILLS.html';
  })
});

$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('modal_1') === 'true') {
      $('.modal_1').fadeIn(); 
  }
  $('.btn1').on('click', function() {
      $('.modal_1').fadeOut(); 
  });
});


// 프로젝트
$('.list_3 img').click(function(){
  $('.list_3').css("width", "70px");
	$('.list_3').css("border", "1px dotted lightblue");
});

$(function(){
  $(".item0 , .btn1").on("click",function(){
  $(".list_3").css("border", "none");
  })
});

$(function(){
  $(".proj").on("dblclick",function(){
  $(".modal_2").show();
  })
  $(".item0").on("click",function(){
      $(".modal_2").hide();
    })
});

$(function(){
  $(".item").on("dblclick",function(){
    window.location.href = 'PROJECT.html';
  })
});

$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('modal_2') === 'true') {
      $('.modal_2').fadeIn(); 
  }
  $('.btn1').on('click', function() {
      $('.modal_2').fadeOut(); 
  });
});


// 메시지
$('.list_4 img').click(function(){
  $('.list_4').css("width", "70px");
	$('.list_4').css("border", "1px dotted lightblue");
});

$(function(){
  $(".gb, .btn1").on("click",function(){
  $(".list_4").css("border", "none");
  })
});

$(function(){
  $(".msgs").on("dblclick",function(){
  $(".modal_3").show();
  })
  $(".gb").on("click",function(){
      $(".modal_3").hide();
    })
});

$(".guestbook, #messages_list").on("click", function(event){
  event.stopPropagation();
});

$(function(){
  $(".tit").on("dblclick",function(){
    window.location.href = 'CONTACT.html';
  })
});

$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('modal_3') === 'true') {
      $('.modal_3').fadeIn(); 
  }
  $('.btn1').on('click', function() {
      $('.modal_3').fadeOut(); 
  });
});

document.addEventListener("DOMContentLoaded", function () {
  displayMessages();

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

      const messages = getMessages();
      messages.push(messageObj);
      saveMessages(messages);
      displayMessages();
      resetForm();
    } else {
      alert("이름과 메시지를 모두 입력해주세요.");
    }
  });

  function displayMessages() {
    const messagesList = document.getElementById('messages_list');
    messagesList.innerHTML = '';

    getMessages().forEach(msg => {
      const messageItem = document.createElement('li');
      messageItem.innerHTML = `
        <div class="text">
        <strong>${msg.name}</strong>                
        <p>${msg.date})</p> 
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
    const messages = getMessages().filter(msg => msg.id !== id);
    saveMessages(messages);
    displayMessages();
  };

  function getMessages() {
    return JSON.parse(localStorage.getItem('messages')) || [];
  }

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
  $(".TH, .btn1").on("click",function(){
  $(".list_6").css("border", "none");
  })
});

$(function(){
  $(".recy").on("dblclick",function(){
  $(".modal_4").show();
  })
  $(".TH").on("click",function(){
      $(".modal_4").hide();
    })
});

$(function(){
  $(".btn_menu").on("dblclick",function(){
    window.location.href = 'recycleBin.html';
  })
});

$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('modal_4') === 'true') {
      $('.modal_4').fadeIn(); 
  }
  $('.btn1').on('click', function() {
      $('.modal_4').fadeOut(); 
  });
});