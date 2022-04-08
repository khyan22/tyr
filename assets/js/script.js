var searchEl = document.querySelector("form")
    var searchInput;

    var getGameData = function(game) {
      var apiUrl = "https://api.rawg.io/api/games?search=" + game + "&key=1162dfcd4c004cc3adeeaa606112ab38";
      fetch(apiUrl).then(function(response) {
        if (response.ok) {
          response.json().then(function(response) {
            for (i = 0; i < response.results.length; i++) {
              console.log(response.results[i].name);
            }
            console.log(response);
          });
        }
        else {
          console.log("Bad response found");
        }
      });
    }






    $("#apiSwitch").on("click", function() {
        var gameSearchBar = document.getElementById("#")
        if (searchEl.id === "game-search-form") {
            $(searchEl).attr("id", "movie-search-form")
            $("#search").attr("placeholder", "Search Movies and Tv Shows")
            console.log(searchEl)
        }else if (searchEl.id === "movie-search-form") {
            $(searchEl).attr("id", "game-search-form")
            $("#search").attr("placeholder", "Search Games")
            console.log(searchEl)
        }
    })

  searchEl.addEventListener("submit", function(e) {
    e.preventDefault();
    searchInput = searchEl.children[0].value;
    
      if (searchEl.id === "game-search-form") {
          getGameData(searchInput);
          $("#search").val("");
      } else if (searchEl.id === "movie-search-form") {
          getMovieData(searchInput);
          searchEl.children[0].value = "";
      }
  });


  var getMovieData = function(movie) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'imdb-data-searching.p.rapidapi.com',
      'X-RapidAPI-Key': 'b3f2425f53msh6ddaa98247cb618p193474jsn1b3a90d328d2'
    }
  };

//   var searchInput = searchEl.children[0].value;


  fetch('https://imdb-data-searching.p.rapidapi.com/om?s=' + movie, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};