let counter = 1;

function increment() {
  counter++;
  increment();
}

try {
  increment();
} catch (error) {
  console.log(counter);
}
