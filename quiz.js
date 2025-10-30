
const quiz = {
  number: "-1",
  question: ["2+2", "9+9", "7+7", "8+8", "9+9", "14+4", "22+9", "23+7", "10+8", "39+9"],
  answers: ["4", "18", "14", "16", "18", "18", "31", "30", "18", "48"],

}
let sec = document.getElementById("play");
sec.style.padding = "10px";
let score = 0;
let user = document.getElementById("username").value;
let nextone = document.getElementById("next")
nextone.addEventListener("click", next)
let pre = document.getElementById("previous");
pre.style.display = "none";
pre.addEventListener("click", previous)
let answer = document.getElementById("answer");
answer.style.display = "none";
let vscore = document.getElementById("score");
vscore.style.display = "none";
document.getElementById("check").addEventListener("click", check)
document.getElementById("score").addEventListener("click", viewscore)

function next() {
  let click = 0;
  if (quiz.number == 9) {
    quiz.number++;
    document.getElementById("headline").textContent = quiz.question[quiz.number];
    document.getElementById("quetion").textContent = quiz.number + 1 + "/10";
    let next = document.getElementById("next");
    next.style.display = "none";
    click = 1;
    vscore.style.display = "block";
    let question = document.getElementById("quetion");
    question.style.display = "none";
    answer.style.display = "none";
    pre.style.display = "none";
    let check = document.getElementById("check");
    check.style.display = "none";


  } if (click == 1) {
    return;
  }
  let check = document.getElementById("check");
  check.style.display = "block";
  pre.style.display = "block";
  sec.style.backgroundColor = "white";
  let previous = document.getElementById("previous");
  previous.style.display = "grid";
  username.style.display = "none";
  answer.style.display = "block";


  quiz.number++;
  document.getElementById("headline").textContent = quiz.question[quiz.number];
  document.getElementById("quetion").textContent = quiz.number + 1 + "/10";

}
function previous() {
    let che = document.getElementById("check");
    che.style.display = "none";
  let click = 0;
  if (quiz.number == 1) {
    let pre = document.getElementById("previous");
    pre.style.display = "none";
    quiz.number--;
    document.getElementById("headline").textContent = quiz.question[quiz.number];
    document.getElementById("quetion").textContent = quiz.number + 1 + "/10";
    click = 1;
    if (click = 1) {
      return;
    }
  }
  let next = document.getElementById("next");
  next.style.display = "grid";
  quiz.number--;
  document.getElementById("headline").textContent = quiz.question[quiz.number];
  document.getElementById("quetion").textContent = quiz.number + 1 + "/10";

}
function check() {

  let useranswer = document.getElementById("answer").value;
  if (useranswer == quiz.answers[quiz.number]) {
    sec.style.backgroundColor = "green";
    sec.style.padding = "10px";
    let check = document.getElementById("check");
    check.style.display = "none";
    score++;
    return;
  }
  else {
    sec.style.backgroundColor = "red";
    sec.style.padding = "10px";
    let check = document.getElementById("check");
    check.style.display = "none";
    return;

  }
}
function viewscore() {
  user = textContent = "Your name : " + username;

  let viewscore = document.getElementById("headline");
  viewscore.textContent = "Your score is : " + score;
  let click = 1;
  if (click = 1){
   let viewscor = document.getElementById("score");
   viewscor.style.display = "none";
  }
}