//guess the three consecutives numbers that equals  24  answer: 7 , 8 , 9

// //guess the three consecutives numbers that equals 18 answer: 5,6,7

// //guess the three consecutives numbers that equals 27 answer: 8,9,10

// first prompt
window.confirm("Hi! Are you ready to play Guess Three?");

// ask for userName
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

//  when the button is clicked show the numbers table
console.log(startBtn);

// 8 9 10
//   7 8 9
// 9 10 11

let showOptions = [
  [8, 9, 10],
  [7, 8, 9],
  [9, 10, 11],
];

let answerOptions = [];
//

startBtn.addEventListener("click", () => {
  alert("Guess three consecutive numbers that equals 24 ");

  document.getElementById("app").innerHTML = showOptions.map((numArray) => {
    answerOptions.push(numArray);

    return `<div> 
    <li><input type="radio" id="aOne" name="answer-1" value="">${numArray}</input><li></div>`;
  });

  let answer = answerOptions[1];

  answer.addEventListener();
});

//  show numbers one through ten
//  select 3 numbers
// if numbers are selected
//  compare selected  numbers to results array
// prompt a window saying yes that is correct
// if the answers do not match the answers in the results array
// prompt a window saying that is incorrect
//  and try again

// let questionOne = window.prompt(
//   "Guess the three consecutive numbers equal to 24"
// );
