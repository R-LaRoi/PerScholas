// BOM lab --- features two questions and three multiple choice answers

// first prompt
window.confirm("Hi! Are you ready to play Guess Three?");

// ask for a userName
let userName = window.prompt("what is your name?");

//  prompts a greeting
if (userName !== null) {
  document.getElementById("app").innerHTML =
    "Hi " +
    userName +
    "! Let's play Guess Three! </br></br><button id='start-btn'>START</button>";
}

//  create start button
let startBtn = document.getElementById("start-btn");

//  when the button is clicked show the the options to select
console.log(startBtn);

let showOptions = [
  { id: 1, answers: [8, 9, 10] },
  { id: 2, answers: [7, 8, 9] },
  { id: 3, answers: [9, 10, 11] },
];

let secondQuestion = [
  { id: 1, answers: [18, 19, 20] },
  { id: 2, answers: [4, 5, 6] },
  { id: 3, answers: [5, 6, 7] },
];

let answer = showOptions[1].id;
let answer2 = showOptions[0].id;
let answer3 = showOptions[2].id;

let answerGame = secondQuestion[2].id;
let answerq2 = secondQuestion[0].id;
let answerq3 = secondQuestion[1].id;

//  shows first question when the button is clicked
startBtn.addEventListener("click", () => {
  alert("Guess three consecutive numbers equal to 24... ");

  // maps through the options for question
  document.getElementById("app").innerHTML = showOptions.map((numArray) => {
    // numArray.replace(",", "");
    // adds id to input  and shows the options----
    return `<div>
   <input type="radio" id="${numArray.id}" name="" value="">${numArray.answers}</input></div>`;
  });

  // add event listener to correct answer
  let radioSelectAnswer = document.getElementById(`${answer}`);
  radioSelectAnswer.addEventListener("click", () => {
    window.alert("Awesome " + userName + "! You are correct!");
    window.alert(
      "Next question! Guess three consecutive numbers equal to 18..."
    );

    // display second question when first question is answered correctly
    document.getElementById("app").innerHTML = secondQuestion.map(
      (numArray) => {
        // adds id to input  and shows the options----
        return `<div>
   <input type="radio" id="${numArray.id}" name="answer-1" value="">${numArray.answers}</input></div>`;
      }
    );

    let radioSelectGame = document.getElementById(`${answerGame}`);
    let selection3 = document.getElementById(`${answerq2}`);
    let selection4 = document.getElementById(`${answerq3}`);
    radioSelectGame.addEventListener("click", () => {
      window.alert(userName + "! You are a winner!");
      // ends the game
      document.getElementById(
        "app"
      ).innerHTML = `<h1> Thank you ${userName} for playing Guess Three!<h1>`;
    });

    selection3.addEventListener("click", () => {
      window.alert(userName + " you are incorrect. Let's try again!");
    });
    selection4.addEventListener("click", () => {
      window.alert(userName + " you are incorrect. Let's try again!");
    });
  });

  // add event listener to incorrect answers
  let selection = document.getElementById(`${answer2}`);
  let selection1 = document.getElementById(`${answer3}`);

  selection.addEventListener("click", () => {
    window.alert(userName + " you are incorrect. Let's try again!");
  });
  selection1.addEventListener("click", () => {
    window.alert(userName + " you are incorrect. Let's try again!");
  });
});
