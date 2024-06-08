// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
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

menuLinks.map((aLink) => {
  // 2. create an a element
  // 3. add href
  let aTag = document.createElement("a");
  aTag.href = aLink.href;
  aTag.textContent = aLink.text;
  console.log(aTag);

  // 5. append element
  topMenuEl.append(aTag);
});

// ----DOM MANIPULATION PART TWO LAB ----------

// 1. select and cache element
let subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl);

// 2. set height to element
subMenuEl.style.height = "100%";

// 3. set background
subMenuEl.style.background = "var(--sub-menu-bg)";

//  4. add a class
subMenuEl.classList.add("flex-around");

//  set position and hide
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//  Part 4: Menu Interactions

let topMenuLinks = document.querySelectorAll("#top-menu a");

function showMenu() {
  topMenuEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (!Array.from(topMenuLinks).includes(e.target)) {
      return;
    }

    topMenuLinks.forEach((tag) => {
      tag.addEventListener("click", function () {
        topMenuLinks.forEach((tag) => {
          // if the tag is active
          if (tag.classList.contains("active")) {
            tag.classList.remove("active");
            subMenuEl.style.top = "0";
          }
          if (!tag.classList.contains("active"));
          {
            this.classList.add("active");
            subMenuEl.style.top = "100%";
          }
        });
        menuLinks.forEach((menuItem) => {
          if (menuItem.text === e.target.textContent) {
            if (menuItem.subLinks) {
              if (!e.target.classList.contains("active")) {
                subMenuEl.style.top = "100%";
                buildSubmenu(menuItem);
              } else {
                subMenuEl.style.top = "0";
              }
            }
          }
        });
      });
    });
  });
}

showMenu();

function buildSubmenu(menuLink) {
  subMenuEl.textContent = "";
  menuLink.subLinks.forEach((subLink) => {
    subNav(subMenuEl, subLink);
  });
}

function subNav(sbmenu, link) {
  const anchorEl = document.createElement("a");
  anchorEl.setAttribute("href", link.href);
  anchorEl.textContent = link.text;
  sbmenu.append(anchorEl);
}
