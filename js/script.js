/* 화살표 bottom 버튼 */
function fnMove(seq){
  let offset = $("#movie" + seq).offset();
  $('html, body').animate({scrollTop : offset.top}, 600); // 위로부터 600 위치로 스크롤
}

/* index _txt 스크롤 */
let mainText = document.getElementsByClassName('_txt');

window.addEventListener('scroll', () => {
  let value = window.scrollY
  console.log('scrollY', value);

  if(value>850) {
    mainText.style.animation = 'disappear 1s ease-out';
  } 
  else{
    mainText.style.animation = 'slide 1s ease-out';
  }
})

/* movie 슬라이드쇼 */ 
let currSlide = 1;
showSlide(currSlide);

function button_click(num){
  showSlide((currSlide += num))
}

function showSlide(num){
  const slides = document.querySelectorAll('.slide');
  if(num>slides.length){
    currSlide = 1;
  } if (num<1){
    currSlide = slides.length;
  }
  for(let i = 0; i < slides.length; i++){
    slides[i].style.display='none';
  } slides[currSlide - 1].style.display='block';
}

$(document).ready(function() {
  $(window).scroll( function(){
      $('._txt').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-left':'0px'},1000);
          }
          
      }); 
  });
});


/*roadmap*/
$('.menu').click((e)=>{
  $(e.target)
      .next()
      // .slideDown();
      // .slideUp()
      .slideToggle()
      .siblings('.content')
      .slideUp()
})

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });








/* member */


//   document.memberForm.addEventListener('submit', (e) => {
//     const usernameVal = userName.value;
//     const useridVal = userId.value;
    
//     if (!usernameVal) {
//       alert("이름을 작성해주세요.");
//       e.preventDefault();
//       return;
//   }
//   if (!useridVal) {
//       alert("id를 입력해주세요.");
//       e.preventDefault();
//       return;
//   }

//   })

//   const saveMember = () => {
//     console.log('회원목록');
//     const usernameVal = userName.value;
//     const useridVal = userId.value;

//     const member = new Member(usernameVal, useridVal);

//     const members = JSON.parse(localStorage.getItem('members')) || [];

//     members.push(member);

//     localStorage.setItem('members', JSON.stringify(members));

//     document.memberForm.reset();

//     renderMemberForm(members);

//   }

//   class Member {
//     constructor(userName, userId, datetime = Date.now()) {
//       this.username = userName;
//       this.userid = userId;
//       this.datetime = datetime;
//     }
//   }

//   const renderMemberForm = (members = JSON.parse(localStorage.getItem('members'))) => {
//     const tbody = document.querySelector("#tb-memberbook tbody");
//     tbody.innerHTML = "";

//     members.forEach((members, index) => {
//       const { username, userid, datetime } = members;
//       const html = `<tr>
//       <td>${index + 1}</td>  
//       <td>${username}</td>  
//       <td>${userid}</td>  
//       <td>${formatDatetime(datetime)}</td>  
//     </tr>`;
//               tbody.innerHTML += html;
//     })
//   }

//   const formatDatetime = (millis) => {
//     const d = new Date(millis);

//     // n을 인자로 받아서 숫자 두 자리로 만들기
//     const f = (n) => n < 10 ? "0" + n : n;
//     const MM = f(d.getMonth() + 1);
//     const dd = f(d.getDate());
//     const HH = f(d.getHours());
//     const mm = f(d.getMinutes());
//     return `${MM}/${dd} ${HH}:${mm}`;
// };

// window.addEventListener('load', () => {
//     renderGuestbook();
// });