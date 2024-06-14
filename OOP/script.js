const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
};

//  log the inventory
for (let index = 0; index < adventurer.inventory.length; index++) {
  const item = adventurer.inventory[index];
  console.log(item);
}

//  add companion
adventurer.companion = { name: "Leo", type: "Cat" };
console.log(adventurer);
