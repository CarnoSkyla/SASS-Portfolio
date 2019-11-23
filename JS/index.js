document.addEventListener('DOMContentLoaded', moveHtml)
function moveHtml() {
  var elemHtml = document.querySelector(".skills-box--html-BAR");
  var width = 1;
  var id = setInterval(frame, 20);
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++;
      elemHtml.style.width = width + '%';
      elemHtml.innerHTML = width * 1  + '%';
    }
  }

  var elemCss = document.querySelector(".skills-box--css-BAR");
  var widthCss = width;
  var idCss = setInterval(frameCss, 20);
  function frameCss() {
    if (widthCss >= 83) {
      clearInterval(idCss);
    } else {
      widthCss++;
      elemCss.style.width = widthCss + '%';
      elemCss.innerHTML = widthCss * 1  + '%';
    }
  }

  var elemJs = document.querySelector(".skills-box--javascript-BAR");
  var widthJs = width;
  var idJs = setInterval(frameJs, 20);
  function frameJs() {
    if (widthCss >= 61) {
      clearInterval(idJs);
    } else {
      widthJs++;
      elemJs.style.width = widthJs + '%';
      elemJs.innerHTML = widthJs * 1  + '%';
    }
  }

  var elemWp = document.querySelector(".skills-box--wordpress-BAR");
  var widthWp = width;
  var idWp = setInterval(frameWp, 20);
  function frameWp() {
    if (widthWp >= 90) {
      clearInterval(idWp);
    } else {
      widthWp++;
      elemWp.style.width = widthWp + '%';
      elemWp.innerHTML = widthWp * 1  + '%';
    }
  }
}


var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  window.location.href = 'https://github.com/';
})

var form = document.getElementById('form');
form.addEventListener('submit', function(e){
  e.preventDefault()
  var userEmail = document.getElementById('email').value;

  var users = [];
  var user = {
    email: userEmail,
  }
  console.log(user);
  users.push(user)
  localStorage.setItem('users', JSON.stringify(users))

  
  alert('Thank you for interacting')
})
