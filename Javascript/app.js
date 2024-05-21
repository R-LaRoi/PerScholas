// DATA MANIPULATION LAB

//PART ONE  ---------------------------->

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//  Numbers are divisible by 5

{
  let result = "";
  (n1, n2, n3, n4 / 5) ? (result = true) : console.log("no");
  console.log(`It is ${result} all the numbers are divisible by 5.`);
}

// Check if the first number is larger than the last. Cache the result in a variable.

let largerNumber = n1 > n4;
console.log(`It is ${largerNumber} the first number is larger.`);

// Accomplish the following arithmetic chain:

let arithmeticChain = ((n1 - n2) * n3) % n4;
console.log(` The answer is ${arithmeticChain}.`);

// Change the way that isOver25 calculates
// Original calculation --->
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

const isOver25 = (n1, n2, n3, n4) > 25;
console.log(` The numbers over 25 retun ${isOver25}.`);

//PART TWO  ---------------------------->

// Set up a program to answer the following questions:

// if travelling at 75mph

let tripMiles = 1500;
let mph = 60;
let mpg = 28;
let budget = 175;
let gallonPrice = 3;
let totalGallons = budget / gallonPrice;

// How many gallons of fuel will you need for the entire trip?
if (mph === 75 && mpg === 23) {
  let totalMpG = tripMiles / mpg;
  console.log(`The total gallons will be ${totalMpG} at 75mph`);

  // How long with the trip take in hours?
  let hours = tripMiles / 75;
  console.log(`Drive will take ${hours} hours.`);

  // Will your budget be enough to cover the fuel expense?
  {
    totalGallons > totalMpG
      ? console.log("yes, there is enough fuel")
      : console.log("No, driver needs fuel.");
  }
}

// if travelling at 60mph you the trip will take
else if (mph === 60 && mpg === 28) {
  let totalMpG = tripMiles / mpg;
  console.log(`The total gallons will be ${totalMpG} at 60mph`);

  let hours = tripMiles / 60;
  console.log(`Drive will take ${hours} hours.`);

  {
    totalGallons > totalMpG
      ? console.log("yes, there is enough fuel")
      : console.log("No, driver needs fuel.");
  }
}

// if travelling at 55mph you the trip will take
else if (mph === 55 && mpg === 30) {
  let totalMpG = tripMiles / mpg;
  console.log(`The total gallons will be ${totalMpG} at 55mph`);
  let hours = tripMiles / 55;
  console.log(`Drive will take ${hours} hours.`);

  {
    totalGallons > totalMpG
      ? console.log("Yes, there is enough fuel.")
      : console.log("No, driver needs fuel.");
  }

  // Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?

  // The driver can travel at 60mph which and require 53.5 gallons and stay within the budget.
  {
    if ((totalGallons < totalMpG && mph === 60) || 55 || 75) {
      console.log("take this trip");
    } else {
      console.log("reconsider");
    }
  }
}

// --------------------------------

// button on index.html screen -->
let onlyBtn = document.querySelector("#btn-js");
onlyBtn.addEventListener("click", function () {
  alert("DataManipulation");
});
