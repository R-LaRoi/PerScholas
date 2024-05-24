// button on index.html screen -->
let onlyBtn = document.querySelector("#btn-js");
onlyBtn.addEventListener("click", function () {
  alert("DataManipulation");
});

// ---------- arrays -------
const films = [
  "Inside Out",
  "His House",
  "Ghost",
  "The Changeling",
  "Nightmare Before Christmas",
  "The Wiz",
];

films[10] = "Blue Gold";
// const film = films[1];

console.log(films);

films.length = 3;
console.log(films);

for (i = 0; i < films.length; i++) {
  console.log(films[i]);
}

// --- add to the end of array
films.push("Crooklyn");
console.log(films);

// --- add to front array
films.unshift("coco");
console.log(films);

// --- removes element from end of array
let lastFilm = films.pop();

// --- removes element from start of array
let firstFilm = films.shift();

//  .splice()  --- add or removes any number of elements to/from an array

let splicedFilms = films.splice(1, 2, "Addams Family");

//  starts at element 1 and doesnt remove anything and adds
splicedFilms = films.splice(1, 0, "Rockers");
console.log(splicedFilms);

//  .slice() --- doesnt modify an array, make a new array starts at one and ends at two

let sliceFilms = films.slice(1, 2);
console.log(sliceFilms);

//  at() acesses elements at given position in an array and --- can count backwards from the end of an array

let atFilms = films.at(2);

// reverse() - reverses the order of an array
console.log(films.reverse());

// .flat() - flattens nested arrays

let flattenArray = [
  [1, 4, 9],
  [2, 6],
  [7, 6],
];

let itsFlat = flattenArray.flat();
console.log(itsFlat);

// ---- sort()  sort compares numerical values and sorts them in ascending order

//  --- best method to iterate over an array
films.forEach((title) => {
  console.log(title);
});

// ... spread operator allow for an array to be copied

let shows = [" abbot", "food wars", "different world"];
("");

let moreShows = [...shows, "martin"];

console.log();

//  accessing values in objects

let nollywood = {
  title: "king of boys",
  year: 2022,
  awards: ["cannes", "academy", "globes"],
  rating: "r",
};

for (const key in nollywood) {
  console.log(nollywood.title);
}

// nested objects
// predefined methods for objects
//  console.log(nollywood.engine.size)
