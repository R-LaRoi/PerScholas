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

//Part 2: Create Menu

// 1.  select nav
let topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl);

// 2. set height

topMenuEl.setAttribute(height, "100%");
