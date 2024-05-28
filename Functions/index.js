// Define a function, as a function declaration, maxOfTwoNumbers

function maxOfTwoNumbers(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n2 > n1) {
    return n2;
  } else if (n1 === n2) {
    return n1;
  }
}

console.log(maxOfTwoNumbers(78, 30));

//a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them.
let maxOfThree = function (n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n3 < n2) {
    return n2;
  } else if (n3 > n2 && n3 > n1) {
    return n3;
  }
};

console.log(maxOfThree(500, 80, 9));

// a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(character) {
  if (
    character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u"
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isCharAVowel("i");

// a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

let numbers = [2, 4, 5];
let sumArray = function () {
  let sum = 0;
  // iterate over array
  for (let i = 0; i < numbers.length; i++) {
    console.log((sum += numbers[i]));
  }
};
