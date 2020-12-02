var scoreCounter = 0;
var currentQuestion = 0;

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var bodyEl = document.createElement("div");
var questionsSpan = document.querySelector("questions");
var questionPlaceHolder = document.querySelector("questionPlaceHolder");
var eternityButton = document.querySelector("#eternity");
var eternity = document.querySelector("#eternity");
var secondsLeft = 60;
var initials = localStorage.getItem("initials");

eternity.textContent = initials;

function hideArticle() {
  var mainEl = document.getElementById("main");
  mainEl.setAttribute("class", "hide");
}

function showClose() {
  var mainEl = document.getElementById("close");
  mainEl.setAttribute("class", "display");
}

function hideQuestions() {
  var mainEl = document.getElementById("questions");
  mainEl.setAttribute("class", "hide");
}

function hideStart() {
  var mainEl = document.getElementById("embark");
  mainEl.setAttribute("class", "hide");
}

function scoreStart() {
  var scoreEl = document.getElementById("score");
  scoreEl.setAttribute("class", "display");
  scoreEl.textContent = "${scoreCounter}";
}

$("#start").on("click", () => {
  console.log(questions);
  hideArticle();
  setTime();
  renderQuestions();
  hideStart();
});

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent =
      secondsLeft + " seconds left until you fulfill your Journey!";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);
}

function renderQuestions() {
  var questionsDiv = document.getElementById("questionPlaceHolder");
  questionsDiv.textContent = questions[currentQuestion].question;
  $("#choices0").text(questions[currentQuestion].choices[0]);

  $("#choices1").text(questions[currentQuestion].choices[1]);

  $("#choices2").text(questions[currentQuestion].choices[2]);

  $("#choices3").text(questions[currentQuestion].choices[3]);
}

$(".choices").on("click", (e) => {
  console.log(e.target.textContent);
  var selectedChoice = e.target.textContent;
  var answer = questions[currentQuestion].answer;

  if (answer === selectedChoice) {
    scoreCounter++;
    secondsLeft = secondsLeft - 10;
  }

  if (currentQuestion === questions.length - 1) {
    showClose();
    hideQuestions();
  } else {
    currentQuestion++;
    renderQuestions();
    //move to current question
  }
});

$("#eternity").on("click", function () {
  console.log("clicked!");
  eternity.textContent = initials;

  localStorage.setItem("initials", initials);
});
