const APILINK =
  "https://api.themoviedb.org/3/discover/movie?sort-by=popularity.desc&api_key=809031ff44ee970971e50822383f6c5d&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=809031ff44ee970971e50822383f6c5d&query=";
const main = document.getElementById("section");
const search = document.getElementsByClassName("inp")[0];
const form = document.getElementById("form");

returnMovies(APILINK);
function returnMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach((element) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        const image = document.createElement("img");
        image.setAttribute("class", "image");
        image.setAttribute("id", "id1");
        const title = document.createElement("h3");
        title.setAttribute("class", "title");
        title.setAttribute("id", "id2");
        title.innerHTML = element.title;
        image.src = IMGPATH + element.poster_path;
        card.appendChild(title);
        card.appendChild(image);

        main.appendChild(card);
      });
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchItem = search.value;
  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
});
