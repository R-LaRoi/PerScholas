function compareTriplets(a, b) {
  for (i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      return console.log(a[i]);
    } else if (a[i] < b[i]) {
      return console.log(b[i]);
    } else if (a[i] === 0) {
      return 0;
    }
  }
}
compareTriplets([1, 2, 3], [3, 2, 1]);
compareTriplets([7, 12, 43], [63, 94, 1]);

// function compareTriplets(a, b) {
//   a.length == b.length && a.every((element, index) => element === a[index]);
// }

// compareTriplets([1, 2, 3], [3, 2, 1]);
// compareTriplets([7, 12, 43], [63, 94, 1]);

//  Factory Function returns an object
function Shop(location, employees, departments) {
  return {
    location,
    employees,
    departments,
    greeting: function () {
      document.write(
        `<h1>There are ${employees} employees working at the ${location} store.`
      );
    },
  };
}

let boston = Shop("boston", 100, "4");
console.log(boston);

//  Constructor Function uses this. and new keyword
function ShopTwo(location, employees, departments) {
  this.location = location;
  this.employees = employees;
  this.departments = departments;
  this.greeting = function () {
    document.write(
      `<h1>There are ${employees} employees working at the ${location} store.`
    );
  };
}

let miami = new ShopTwo("miami", 80, "4");
console.log(miami.greeting());

class Cookies {
  constructor(flavor, diet, type) {
    this.flavor = flavor;
    this.diet = diet;
    this.type = type;
    this.request = function () {
      document.write(`<h1>You like ${this.flavor}<h1>`);
    };
  }
}

let chocolateChip = new Cookies("chocolate-chip", "vegan", "fresh");
let OatmealRaisin = new Cookies("oatmeal raisin", "gluten-free", "fresh");
chocolateChip.request();
OatmealRaisin.request();

class Designers {
  constructor(brand, product, season) {
    this.brand = brand;
    this.product = product;
    this.season = season;
    this.shopping = function () {
      document.write(
        `<p> ${this.brand} has a new collection for ${this.season}</p>`
      );
    };
  }
}

let Dries = new Designers("Dries Van Noten", "dresses", "fall");

Dries.shopping();

class Shoes extends Designers {
  constructor(style, color, season) {
    super(Dries);
    this.style = style;
    this.color = color;
    this.season = season;
  }
}

const tabitha = new Shoes("sandal", "maron", "spring");
console.log(tabitha);

for (let key in tabitha) {
  console.log(key, tabitha[key]);
  // returns the object properties, brand, style, color,season
}

for (let key in tabitha) {
  if (typeof tabitha[key] !== "function") console.log(key, tabitha[key]);

  // returns the object properties, brand, style, color,season
}

// get all the keys of an object
let keys = Object.keys(tabitha);

console.log(keys);

if ("style" in tabitha) console.log("yes");

class StopWatch {
  constructor(start, duration, stop, reset) {
    this.start = start;
    this.duration = duration;
    this.stop = stop;
    // this.reset = reset;
  }
}

let seconds = 0;

const timer = new StopWatch(
  function incrementSeconds() {
    seconds += 1;
    setInterval(incrementSeconds, 1000);
    console.log(seconds);
  },
  function () {
    // console.log("duration");
    return Date.now();
  },
  function () {
    // console.log("stop");
    return Date.now();
  }
);

// console.log(timer.start());

setTimeout(() => console.log("Five"), 8000);

// create a promise

// const makethis = new Promise(() => {
//   setTimeout(() => console.log("Two"), 2000);
// })
//   .then(() => {
//     console.log("Threeeee");
//   })
//   .then(() => {
//     throw new Error("Something failed");
//   });

// console.log(makethis);

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

let nums = [1, 2, 3, 4, 5, 6, 7];

let k = 3;

nums.pop(1);

console.log(nums);

function rotate1(nums, k) {
  for (let index = 0; index < array.length; index++) {
    const element = nums.pop(nums.unshift);
  }
}

console.log(nums.reverse());

var isPalindrome = function (s) {
  let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let trimmed = "";
  for (let i = 0; i < s.length; i++) {
    if (alpha.includes(s[i])) {
      trimmed += s[i];
    }
  }
  let reversed = trimmed.split("").reverse().join("");
  return trimmed.toLowerCase() === reversed.toLowerCase();
};
