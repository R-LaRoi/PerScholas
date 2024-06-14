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
