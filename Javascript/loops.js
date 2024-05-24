// index.html  ---------button --------

let onlyBtn = document.querySelector("#btn-js");
onlyBtn.addEventListener("click", function () {
  alert("Loops");
});

// ------------------------------------

// Fizz Buzz
// loop through all numbers up to 100

for (let num = 1; num <= 100; num++) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else if (num % 3 === 0) {
    console.log("Fizz Buzz");
  } else if (num % 3 !== 0 && num % 5 !== 0) {
    console.log(num);
  }
}

//  Part Two:
//  1 is not a prime number
//  if it can be divided by more than

let arbNumber = 9;

while (true) {
  let primeNumber = true;

  for (let i = 2; i < arbNumber; i++) {
    if (arbNumber % i === 0) {
      primeNumber = false;
    }
  }
  if (primeNumber === true) {
    console.log(arbNumber);
    break;
  }
  arbNumber++;
}

//  loop through characters of a string

const thisString = [
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26",
];

thisString.forEach((element) => console.log(element));

for (let index = 0; index < thisString.length; index++) {
  console.log(thisString[index]);
}
