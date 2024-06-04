//guess the three consecutives numbers that equals  24  answer: 7 , 8 , 9

// //guess the three consecutives numbers that equals 18 answer: 5,6,7

// //guess the three consecutives numbers that equals 27 answer: 8,9,10

window.confirm("Hi! Are you ready to play Guess Three?");

let userName = window.prompt("what is your name?");

if (userName !== null) {
  document.getElementById("app").innerHTML =
    "Hi " + userName + "! Let's play Guess Three!";
}
