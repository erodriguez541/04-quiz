var questioncontainer = document.querySelector("#question-container");
var timer = document.querySelector(".countdown");



//make a question array
var questions = [
  {
    question: "What does the DOM stand for?",
    options: ["Do One More", "Document Object Model", "Device Object Model","Document Object Model"],
    answer: "Document Object Model"
  },
  { 
  question: "What's your name?",
    options: ["Name", "Ernie","Test"],
    answer: "Ernie"
  }
]
console.log(questions)
///timer
var secondsLeft= 60;


timer.addEventListener("click", startTimer(){
  var timer = setInterval(function() {
    console.log(count);
    count--;
    if(count === 0) {
      stopInterval()
    }
  }, 1000);
  
  var stopInterval = function() {
    console.log('time is up!');
    clearInterval(timer);
  }

//Create a function to pull in the next question
//Create a score


//let timerInterval = null;


