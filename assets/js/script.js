var gameSearch = document.getElementById("game-search-form");
var movieSearch = document.getElementById("movie-search-form");
var game;
var movie;

var getGameData = function(e) {
  e.preventDefault();
  
  game = gameSearch.children[0].value;

  var apiUrl = "https://api.rawg.io/api/games?search=" + game + "&key=1162dfcd4c004cc3adeeaa606112ab38";

  fetch(apiUrl).then(function(response) {
    if (response.ok) {
      response.json().then(function(response) {
        // for (i = 0; i < response.results.length; i++) {
        //   console.log(response.results[i]);
        // }
        console.log(response);
      });
    }
    else {
      console.log("Bad response found");
    }
  });
}

gameSearch.addEventListener("submit", getGameData);



var getMovieData = function(e) {
  e.preventDefault();
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'imdb-data-searching.p.rapidapi.com',
      'X-RapidAPI-Key': 'b3f2425f53msh6ddaa98247cb618p193474jsn1b3a90d328d2'
    }
  };

  var movie = movieSearch.children[0].value;


  fetch('https://imdb-data-searching.p.rapidapi.com/om?s=' + movie, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

movieSearch.addEventListener("submit", getMovieData)