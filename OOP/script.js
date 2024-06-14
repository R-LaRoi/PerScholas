const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
};

for (let index = 0; index < adventurer.inventory.length; index++) {
  const item = adventurer.inventory[index];
  console.log(item);
}
