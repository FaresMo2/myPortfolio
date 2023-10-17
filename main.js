let form = document.forms;
form[0].onsubmit = function (el) {
  el.preventDefault();
};

// Start Statistic Counter
let up = document.querySelector(".count");
function countUp() {
  let currentValue = parseInt(up.textContent); // From String To Number
  up.textContent = currentValue + 1;
  if (up.textContent === "500") {
    clearInterval(counter);
  }
}
let counter = setInterval(countUp, 50);


function countNumber() {
  let currentValueTwo = parseInt(num.innerHTML);
  let newValueTwo = currentValueTwo + 1;
  num.innerHTML = newValueTwo;
  if (num.innerHTML === "8") {
    clearInterval(counterTwo);
  }
}
let counterTwo = setInterval(countNumber, 400);
// End Statistic Counter

// Start Header Animation
var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
});
// End Header Animation

//Start Button Scroll
let btn = document.querySelector(".up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
//End Button Scroll

// Start Dark Mode
const icon = document.getElementById("dark-icon");
const logo = document.getElementById("imgLogo");

// Check if there's a stored theme in localStorage and apply it

if (window.localStorage.getItem("theme")) {
  document.body.style.backgroundColor = window.localStorage.getItem("theme");

  // Apply dark theme if the stored theme is "#444"
  if (window.localStorage.getItem("theme") === "#444") {
    document.body.classList.add("dark-theme");
    icon.src = "imgs/sun.png";
    logo.src = "imgs/SimpleLogoWhite.png";
  }
}

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    window.localStorage.setItem("theme", "#444");
    icon.src = "imgs/sun.png";
    logo.src = "imgs/SimpleLogoWhite.png";
    document.body.style.backgroundColor = "#444";
  } else {
    window.localStorage.setItem("theme", "white");
    icon.src = "imgs/moon.png";
    logo.src = "imgs/SimpleLogoDarkBlue.png";
    document.body.style.backgroundColor = "white";
  }
};
// End Dark Mode

// Start SessionStorage For Contact Section
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let subjectInput = document.getElementById("subject");
let textArea = document.getElementById("textarea");

nameInput.oninput = function () {
  window.sessionStorage.setItem("name", nameInput.value);
};
emailInput.oninput = function () {
  window.sessionStorage.setItem("email", emailInput.value);
};
subjectInput.oninput = function () {
  window.sessionStorage.setItem("subject", subjectInput.value);
};
textArea.oninput = function () {
  window.sessionStorage.setItem("textArea", textArea.value);
};

nameInput.value = window.sessionStorage.getItem("name");
emailInput.value = window.sessionStorage.getItem("email");
subjectInput.value = window.sessionStorage.getItem("subject");
textArea.value = window.sessionStorage.getItem("textArea");
// End SessionStorage For Contact Section
