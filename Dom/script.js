// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// Part 1 ------

// 1. select and cache main element ----
let mainEl = document.querySelector("main");
console.log(mainEl);

// 2. change background
mainEl.style.background = "var(--main-bg)";

// 3. set content to h1
mainEl.innerHTML = `<h1> DOM MANIPULATION </h1>`;

// 4. add class flex-ctr
mainEl.classList.add("flex-ctr");

//Part 2: Create Menu ---------

// 1.  select nav
let topMenuEl = document.getElementById("top-menu");

// 2. set height
topMenuEl.style.height = "100%";
// topMenuEl.setProperty("background", "var(--top-menu-bg)");

// 3. add background color
topMenuEl.style.background = "var(--top-menu-bg";

// 4. add flex class
topMenuEl.classList.add("flex-around");
console.log(topMenuEl);

// Part 3: Adding Menu Buttons

// 1. iterate over links data

let theLinks = menuLinks.map((aLink) => {
  // 2. create an a element
  // 3. add href
  let aTag = document.createElement("a");
  aTag.href = aLink.href;
  aTag.textContent = aLink.text;
  console.log(aTag);

  // 5. append element
  topMenuEl.append(aTag);
});
