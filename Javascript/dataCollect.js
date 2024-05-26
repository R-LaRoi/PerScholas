//  Part One: ---------------------

const csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// convert string into an array

let csvArray = csvData.split("\n");
console.log(csvArray);

//  store each cell of data into a variable and convert each item into a string

let cellZero = csvArray[0].split(",");
let cellOne = csvArray[1].split(",");
let cellTwo = csvArray[2].split(",");
let cellThree = csvArray[3].split(",");

console.log(cellOne);

//  PART TWO: ---------------

//  declare a variable that stores the number of columns in each row;

let csvColumn0 = cellZero.length;
let csvColumn1 = cellOne.length;
let csvColumn2 = cellTwo.length;
let csvColumn3 = cellZero.length;

console.log(csvColumn0);

//  create parent array
let parentArray = [];
parentArray.push(cellZero, cellOne, cellTwo, cellThree);
console.log(parentArray);

// Part Three:  --------------------

let newObject = {};
newObject = { ...parentArray };

// separate arrays
let array1 = newObject[1];
let array2 = newObject[2];
let array3 = newObject[3];

console.log(newObject);

// converts arrays into nested objects inside of a a new array

let thisArray = [];
let assignedObjects = [
  Object.assign({}, array1),
  Object.assign({}, array2),
  Object.assign({}, array3),
];

thisArray.push(assignedObjects);
console.log(thisArray);

//  Part Four ------------------
// Remove the last element from the sorted array.

// thisArray[0].pop();
// console.log(thisArray);

// let newCSVobj = { id: "48", name: "Barry", occupation: "Runner", age: "25" };

// thisArray[0].push(newCSVobj);
// console.log(thisArray);

// Part Five  -------

// let changeData = thisArray[0].flat();
// console.log(changeData);
