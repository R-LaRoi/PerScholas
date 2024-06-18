const breedSelect = document.getElementById("breedSelect");

const infoDump = document.getElementById("infoDump");

const progressBar = document.getElementById("progressBar");

const getFavouritesBtn = document.getElementById("getFavouritesBtn");

let API_KEY =
  "live_pSmjFQzPtXrYMiFp0YUHtvsMopyYu9WtRlGN5YMsY0kBnrvMaQJegT69HodpyRd2";

// /**
//  * 1. Create an async function "initialLoad" that does the following:
//  * - Retrieve a list of breeds from the cat API using fetch().

async function initialLoad() {
  catUrl = `https://api.thecatapi.com/v1/breeds`;

  axios.get(catUrl).then((response) => {
    let catData = response.data;
    catData.map((cat) => {
      let options = document.createElement("options");

      options.setAttribute("value", cat.id);
      options.textContent = cat.name;
      console.log(options);

      breedSelect.append(options);

      breedSelect.addEventListener("select", () => {
        if (cat.id) {
          console.log("yes");
        }
      });
    });
  });
}
initialLoad();

//  *  - Append each of these new elements to the carousel.
//  * - Use the other data you have been given to create an informational section within the infoDump element.
//  *  - Be creative with how you create DOM elements and HTML.
//  *  - Feel free to edit index.html and styles.css to suit your needs, but be careful!
//  *  - Remember that functionality comes first, but user experience and design are important.
//  * - Each new selection should clear, re-populate, and restart the Carousel.
//  * - Add a call to this function to the end of your initialLoad function above to create the initial carousel.
//  */

// /**
//  * 3. Fork your own sandbox, creating a new one named "JavaScript Axios Lab."
