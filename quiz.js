
const quiz = {
  number : "-1",
  question : ["2+2","9+9","7+7","8+8","9+9","14+4","22+9","23+7","10+8","39+9"],
  answers : ["4","18","14","16","18","18","31","30","18","48"],
}

function next() {
  if(quiz.number == 9){
   return;
    }

quiz.number++;
    document.getElementById("headline").innerHTML = quiz.question[quiz.number] ;
    document.getElementById("quetion").innerHTML = quiz.number + 1 +"/10";

}
function previous() {
  if(quiz.number == 0){
    
   return;
    }
    quiz.number --;
    document.getElementById("headline").innerHTML = quiz.question[quiz.number];
    document.getElementById("quetion").innerHTML = quiz.number + 1 + "/10";
     let next = document.getElementById("next");
}
function check(){
      let d = document.getElementById("play");
    d.style.padding("100px");
    d.style.backgroundColor("red");
}