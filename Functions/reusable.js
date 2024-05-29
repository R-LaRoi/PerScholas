// Part 1: Thinking Functionally

// 1. Take an array of numbers and return the sum.

const sumArr1 = [90, 60, 80, 30, 500];

function returnSum(numbers) {
  let sum = 0;
  numbers.forEach(function (number) {
    sum += number;
  });
  console.log(sum);
}

returnSum(sumArr1);

// 2. Take an array of numbers and return the average.

let avArrNum = [59, 69, 79, 89, 99];

function avgArray(avgNum) {
  let avgSum = 0;
  avgNum.forEach(function (avgNumber) {
    avgSum += avgNumber;
  });
  console.log(avgSum / avgNum.length);
}

avgArray(avArrNum);

// 3. Take an array of strings and return the longest string

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

// 4. Take an array of strings, and a number and return an array of the strings that are longer than the given number.

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

// 5. Take a number, n, and print every number between 1 and n without using loops. Use recursion.

let arbNumber = 19;

function useRecursion(aNumber) {
  let count = 1;
  if (aNumber < count) return [];
  return [aNumber, ...useRecursion(aNumber - 1)];
}
console.log(useRecursion(arbNumber));

useRecursion(arbNumber);

// Part 2: Thinking Methodically --------------

//  Use callback functions alongside Array methods to accomplish the following:

let tabluarData = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// 1.  Sort the array by age.

let newObject = {};
newObject = { ...tabluarData };
console.log(newObject);
// get age inside of objects

let age0 = newObject[0].age;
let age1 = newObject[1].age;
let age2 = newObject[2].age;
let age3 = newObject[3].age;
let age4 = newObject[4].age;

// create age array
let agesArray = [];

agesArray.push(age0, age1, age2, age3, age4);

// Sort the array by age.
agesArray.sort(function (n1, n2) {
  return n1 - n2;
});

console.log(agesArray);

//2. Filter the array to remove entries with an age greater than 50.

let filterAge = agesArray.filter(function (num) {
  if (num > 50) return num;
});

console.log(filterAge);

// 4.Use the reduce method to calculate the sum of the ages.

// ---- Note: used  a number constructor to convert ageString into a numerical value
function convertArray(age) {
  return Number(age);
}
// variable maps through the agesArray, converts and returns numerical age array
let allAges = agesArray.map(convertArray);
console.log(allAges);

function useReduction(num1, num2) {
  let sum = 0;
  sum += num1 + num2;
  return sum;
}
console.log(allAges.reduce(useReduction));

let sumResult = allAges.reduce(useReduction);

// Then use the result to calculate the average age.

function averageAge(ageArr) {
  // take the sumResult variable and divide by the the length of the allAges array

  let avgAge = sumResult / ageArr.length;
  console.log(Math.round(avgAge));
}

averageAge(allAges);

// 3. Map the array to change the “occupation” key to “job” and increment every age by 1.

function increaseAge(agesArr) {
  for (let i = 0; i < agesArr.length; i++) {
    agesArr[i] += 1;
  }
  console.log(agesArr);
}
increaseAge(allAges);

// Part 3: Thinking Critically --- for this section, develop functions that accomplish the following:

// Take an object and increment its age field.

let anObject = {
  id: "63",
  name: "Blaine",
  occupation: "Quiz Master",
  age: "58",
};

function increaseAge(passObj) {
  let getAge = passObj.age;
  let addAge = Number(getAge) + 1;

  passObj.age = addAge;
  console.log(passObj);
}

increaseAge(anObject);

// Take an object, make a copy, and increment the age field of the copy. Return the copy.
let objectCopy = { ...anObject };

function makeCopy(objCopy) {
  let newAge = Number(objCopy.age) + 1;
  objCopy.age = newAge;
  return objCopy;
}

console.log(makeCopy(objectCopy));

// Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.

//  add to an existing object
console.log(objectCopy);
let addDate = new Date();

let updatedObj = { ...objectCopy, updatedAt: { addDate } };
console.log(updatedObj);
