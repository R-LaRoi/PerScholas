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

console.log(cellZero, cellOne, cellTwo, cellThree);

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
let array0 = newObject[0];
let array1 = newObject[1];
let array2 = newObject[2];
let array3 = newObject[3];

// forEach string inside of array convert to  lowercase

array0.forEach((element) => {
  let newStr = element.toLowerCase("");
  console.log(newStr);
});

// converts arrays into nested objects inside of a a new array

//  add key/value
let objZero = {
  id: array0[0],
  name: array0[1],
  occupation: array0[2],
  age: array0[3],
};

let objOne = {
  id: array1[0],
  name: array1[1],
  occupation: array1[2],
  age: array1[3],
};

let objTwo = {
  id: array2[0],
  name: array2[1],
  occupation: array2[2],
  age: array3[3],
};

let objThree = {
  id: array3[0],
  name: array3[1],
  occupation: array3[2],
  age: array3[3],
};

//  nest objects

let nestCSVobject = [];

nestCSVobject.push(objZero, objOne, objTwo, objThree);

console.log(nestCSVobject);

//  Part Four ------------------
// Remove the last element from the sorted array.

// let removeItem = nestCSVobject[0].pop();
// console.log(removeItem);

// let newCSVobj = { id: "48", name: "Barry", occupation: "Runner", age: "25" };

// let pushItem = nestCSVobject[0].pop();
// [0].push(newCSVobj);
// console.log(pushItem);

// Part Five  -------

// let changeData = newObject.toString();
// console.log(changeData);
