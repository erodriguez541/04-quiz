var questionContainer = document.querySelector("#question-container");
var timerElement = document.querySelector(".timer-count");
var answerbtn = document.querySelector("#answer-buttons")
var startButton = document.querySelector(".start-button");
var isWin = false;
var timerCount;
var timer;



//Start Button
function startGame() {
  isWin = false;
  timerCount = 60;
  startButton.disabled = true;
  //renderQuestions()
  startTimer()
  //render()
}

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

function endGame(){
  startButton.disabled = false;
 // setLosses()
}

/// Create a timer
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        clearInterval(timer);
        nextQuestion();
      }
    }
    if (timerCount === 0) {
      clearInterval(timer);
      showQuestion();
      endGame();
    }
  }, 1000);
}

function showQuestion(){
  nextQuestion();
}
function nextQuestion(){
  questionContainer.textContent = questions[questionIndex].question;

}

///Trigger the timer to start on start button
startButton.addEventListener('click',startGame);



//GOAL: CREATE A QUIZ
//1. Click Start Button **Done
//2. Show First Question
//3. Show Answers for First Question
//4. Start timer** Done
//4a. if time runs out(if timer hits 0)...end the game
//      a.  Show that the game is over.
//      b.  Get user initials for high score screen
//      c.  Figure out the high score
//      d.  Save that high score.
//      e.  Stop the timer
//4b. Answer is selected
//  a. if correct answer is selected...  Show next question.  Show next answers.
//  b. if incorrect answer is selected...reduce time remaining
//  c. If all questions are answered...end the game
//      a.  Show that the game is over.
//      b.  Get user initials for high score screen
//      c.  Figure out the high score
//      d.  Save that high score.
//      e.  Stop the timer

////Bubbling activity from class and data attributes 17-20
