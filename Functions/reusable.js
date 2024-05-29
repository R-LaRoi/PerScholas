// Take an array of numbers and return the sum.

const sumArr = [100, 40, 80, 30];

function returnSum(numbers) {
  let sum = 0;
  numbers.forEach(function (number) {
    sum += number;
  });
  console.log(sum);
}

returnSum(sumArr);

// Take an array of numbers and return the average.

let avArrNum = [59, 69, 79, 89, 99];

function avgArray(avgNum) {
  let avgSum = 0;
  avgNum.forEach(function (avgNumber) {
    avgSum += avgNumber;
  });
  console.log(avgSum / avgNum.length);
}

avgArray(avArrNum);

// Take an array of strings and return the longest string

arrOfStr = ["changeling", "his house", "nightmare before christmas"];

function showStringLength(strArr) {
  // init variable
  let lgString = "";
  // loop through array and compare the length
  strArr.forEach((element) => {
    if (element.length > lgString.length) {
      lgString = element;
    }
    console.log(lgString);
  });
}

showStringLength(arrOfStr);

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.

num1rapArray = [
  "gunna",
  "key glock",
  "rick ross",
  "moneybagg yo",
  "yo gotti",
  "ghetts",
  8,
];

let rapValue = "";
let newRapArray = [];

function givenNumber(arrayValues) {
  arrayValues.forEach((element) => {
    if (typeof element === "number") {
      rapValue = element;
      console.log(rapValue);
    }
    arrayValues.forEach((newElement) => {
      if (newElement.length > rapValue) {
        newRapArray = newElement;
      }
      console.log(newRapArray);
    });
  });
}

givenNumber(num1rapArray);

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

let arbNumber = 19;

function useRecursion(aNumber) {
  let count = 1;
  if (aNumber < count) return [];
  return [aNumber, ...useRecursion(aNumber - 1)];
}
console.log(useRecursion(arbNumber));

useRecursion(arbNumber);

// Use callback functions alongside Array methods to accomplish the following:
let tabluarData = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// Sort the array by age.
console.log(tabluarData);

let values = Object.values(tabluarData[0].age);
console.log(values);
// console.log(newObject[0].age);
// Filter the array to remove entries with an age greater than 50.

// Map the array to change the “occupation” key to “job” and increment every age by 1.

// Use the reduce method to calculate the sum of the ages.

// Then use the result to calculate the average age.

// Part 3: Thinking Critically --- for this section, develop functions that accomplish the following:

// Take an object and increment its age field.

// Take an object, make a copy, and increment the age field of the copy. Return the copy.

// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0.

// Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
