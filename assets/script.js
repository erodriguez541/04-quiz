var countdown = document.querySelector("countdown");
var countdown = setInterval(60)

//make a question array
var questions = [
  {
    question: "What does the DOM stand for?",
    answerone: "Do One More",
    answertwo: "Document Object Model",
    answerthree: "Device Object Model",
    correctanswer: "Document Object Model"
  }
]
console.log(questions)
///timer
var timer = setInterval(0)
document.getElementsByClassName(countdown).addEventListener("click", countdown);{
  //  setup a timer
  const intervalId = setInterval(() => {
      // update the timer  
      this.timeRemaining -= 1000;

      if (this.timeRemaining < 0) {
          // call the callback
          complete();

          // clear the interval if expired
          clearInterval(intervalId);
      }

  }, 1000);
}




//let timerInterval = null;

//document.getElementById("countdown").innerHTML = `...`

//function startTimer() {
//  timerInterval = setInterval(() => {
    
    // The amount of time passed increments by one
  //  timePassed = timePassed += 1;
    //timeLeft = TIME_LIMIT - timePassed;
    
    // The time left label is updated
    //document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
//  }, 1000);
//}

