// Part One ----------------------

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

// sub-obj companion
adventurer.companion.companion = {
  name: "Frank",
  type: "Flea",
  belongings: ["hat", "sunglasses"],
};

// add method and call adventurer.roll()
adventurer.roll = function roll(mod = 0) {
  const result = Math.floor(Math.random() * 20) + 1 + mod;
  console.log(`${this.name} rolled a ${result}.`);
};

adventurer.roll();

// Part Two ---------------------------

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
    this.roll = function roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    };
  }
}

// Part Three - Six -------------------
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  static max_health = 100;
  static roles = ["fighter", "healer", "wizard"];
  static checkRole(role) {
    return this.roles.includes(role);
  }

  static duel(adventurerTwo) {
    let adRoll = adventurer.roll();
    let adRoll2 = adventurerTwo.roll();

    if (adRoll < adRoll2) {
      adventurer.health--;
      console.log(`the winner is ${this.name}`);
    }
    if (adRoll > adRoll2) {
      adventurerTwo.health--;
      console.log(`the winner is ${adventurerTwo.name}`);
    }
    if (adventurer.health <= 50) {
      console.log(`the winner is ...`);
    }
  }
}

//  Create companion class
class Companion {
  constructor(name, type, belongings = []) {
    this.name = name;
    this.type = type;
    this.belongings = belongings;
  }
}

// change the declaration of Robin and the companions to use the new Adventurer and Companion classes.

let robin = new Adventurer("Robin", "Fighter");

robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo", "Cat");

robin.companion.companion = new Companion("Frank", "Flea", [
  "small hat",
  "sunglasses",
]);

console.log(robin);

let figOne = new Adventurer("Stone", "Timekeeper");

let figTwo = new Adventurer("Jade", "Healer");

console.log(figTwo, figOne);
Adventurer.duel(figOne, figTwo);
