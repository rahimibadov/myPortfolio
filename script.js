

//^ home de animasiyali  yazi
let words = document.querySelectorAll(".word");
words.forEach((word)=>{
  let letters = word.textContent.split("");
  word.textContent="";
  letters.forEach((letter)=>{
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex +1];

  Array.from(currentWord.children).forEach((letter,i)=>{
    setTimeout(()=>{
      letter.className = "letter out";
    },i * 80);
  });
  nextWord.style.opacity="1";
  Array.from(nextWord.children).forEach((letter,i)=>{
    letter.className = "letter behind";
    setTimeout(()=>{
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex +1;
};

changeText();
setInterval(changeText,3000);


//^ my skills typing yazi
var typedd = new Typed(".my-skills-typing", {
  strings: [" I am a front end developer with 1 year of experience",
    "I am always searching and improving myself.",
    "I have worked on projects with others and by myself."],
  typeSpeed: 100,
  backSpeed: 10,
  loop: true
});

//  nav hamburger

let hamburger = document.querySelector("#hamburger");
let ul = document.querySelector(".menu");
let home = document.querySelector(".home");
let closeBtn = document.querySelector("#close-btn");
let circle = document.querySelector(".circal");
let social = document.querySelector(".social");


hamburger.addEventListener("click", () => {
  ul.classList.toggle("showData");
  hamburger.style.display = "none";
  closeBtn.style.display = "block";
  circle.style.transform ="translateX(-70px)";
  social.style.transform ="translateY(50px)";
});


closeBtn.addEventListener("click", () => {
  closeBtn.style.display = "none";
  hamburger.style.display = "block";
  ul.classList.toggle("showData");
  circle.style.transform ="translateX(0px)";
  social.style.transform ="translateY(0px)";
});



//responsive navbar show end

AOS.init({
    duration: 1000
  });


// scroll button

// const togtop = () =>
// document.getElementById("backTop").style.display = window.scrollY >= 100 ? "flex" : "none";

// windows.addEventListener("scroll", togtop);
// windows.addEventListener("resize", togtop);