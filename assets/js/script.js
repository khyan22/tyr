var searchEl = document.getElementById("game-search-form");
    var game;
    var getGameData = function(e) {
      e.preventDefault();
      game = searchEl.children[0].value;
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


    $("#apiSwitch").on("click", function() {
        var gameSearchBar = document.getElementById("#")
        if (searchEl.id === "game-search-form") {
            $(searchEl).attr("id", "movie-search-form")
            $("#search").attr("placeholder", "Search Movies and Tv Shows")
            console.log(searchEl.id)
        }else if (searchEl.id === "movie-search-form") {
            $(searchEl).attr("id", "game-search-form")
            $("#search").attr("placeholder", "Search Games")
        }
    })

  searchEl.addEventListener("submit", getGameData);