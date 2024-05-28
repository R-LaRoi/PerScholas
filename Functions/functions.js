// function expressions cannot be invoked before they are defined; whereas function declarations are hoisted to the top of their scope and can therefore be invoked even if they are defined later in the source code.

// arrow functions --- concise, implicit return a single expression, single rule binding the this keyword

function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2);
}

console.log(areBothEven(4, 17));

// function declaration

function getArea(width, height) {
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${
    width * height
  } square units.`;
}

console.log(getArea(12, 18));

// function expression

let planetHasWater = function (planet) {
  let item = planet.toLowerCase();
  if (item === "earth" || item === "mars") {
    return true;
  } else return false;
};

console.log(planetHasWater("Earth"));

// parameters are the placeholders for inputs that the fn will recieve
//  arguments are specific values of JS data types

function maxOfTwoNumbers(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n2 > n1) {
    return n2;
  } else if (n1 === n2) {
    return n1;
  }
}

console.log(maxOfTwoNumbers(53, 33));

//a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n3 < n2) {
    return n2;
  } else if (n3 > n2 && n3 > n1) {
    return n3;
  }
}

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
