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

//  iterate over array
//  get length of each string
// compare string 1/2/3

function showStringLength(strArr) {
  let strLength = [];
  strArr.forEach((element) => {
    strLength.push(element.length);
    console.log(strLength);
  });
}

arrOfStr = ["changeling", "his house", "nightmare before christmas"];

const strLength = showStringLength(arrOfStr);

function showStringLength(strArr) {}

showStringLength(arrOfStr);

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.

// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
