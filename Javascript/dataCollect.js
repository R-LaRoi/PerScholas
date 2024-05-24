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

const objData = {};
for (let keys of cellZero) {
  objData[keys] = "";
}

console.log(objData);

//
