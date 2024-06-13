let counter = 1;

try {
  function increment() {
    if (counter >= 1) {
      counter++;
      return increment();
    }
  }
} catch (error) {
  console.log(counter);
}
increment();
