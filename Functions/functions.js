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
