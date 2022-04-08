var searchEl = document.querySelector("form")
var savedHistory = JSON.parse(localStorage.getItem("savedHistory")) || [];
var searchInput;

    var getGameData = function(game) {
      var apiUrl = "https://api.rawg.io/api/games?search=" + game + "&key=1162dfcd4c004cc3adeeaa606112ab38";
      fetch(apiUrl).then(function(response) {
        if (response.ok) {
          response.json().then(function(response) {
              console.log(response);
            for (i = 0; i < response.results.length; i++) {
                var gameName = response.results[i].name
                var esrbRating = response.results[i].esrb_rating.name
                var releaseDate = response.results[i].released
                var saveBtn = document.createElement("button")
                
                saveBtn.innerHTML = "<i class='fa-solid fa-plus'></i>"
                $(saveBtn).addClass("position-absolute top-0 end-0 translate-middle-x rounded-circle btn btn-outline-secondary mt-1 ms-4")

                var listedGame = document.createElement("li")
                listedGame.innerHTML = gameName + " <br /> " + " ESRB Rating: " + esrbRating + " | " + "Release Date: " + releaseDate
                $(listedGame).append(saveBtn)
                $(listedGame).addClass("search-result-li mt-3 text-dark h-100 p-4 position-relative text-center")
                $("#search-results").append(listedGame);


                $(saveBtn).on("click", function() {
                    var savedText = $(this).parent().text()
                    var savedLi = document.createElement("li")


                    $(savedLi).text(savedText);
                    console.log(savedLi)
                    $(savedLi).addClass("dropdown-item");
                    
                    $("#saveList").append(savedLi);

                    savedHistory.push(savedText);
                    localStorage.setItem("savedHistory", JSON.stringify(savedHistory));
                });

                
            }
            
          });
        }
        else {
          console.log("Invalid response found!");
        }
      });
    }


var getMovieData = function(movie) {
  const options = {
    method: 'GET',
    url: 'https://imdb-data-searching.p.rapidapi.com/om?s=' + movie,
    headers: {
      'X-RapidAPI-Host': 'imdb-data-searching.p.rapidapi.com',
      'X-RapidAPI-Key': 'b3f2425f53msh6ddaa98247cb618p193474jsn1b3a90d328d2'
    }
  };

  axios.request(options).then(response => {
      for (i = 0; i < response.data.Search.length; i++) {
        var movieName = response.data.Search[i].Title;
        var movieYear = response.data.Search[i].Year;
        var saveBtn = document.createElement("button");
        console.log(movieYear);

        saveBtn.innerHTML = "<i class='fa-solid fa-plus'></i>";
        $(saveBtn).addClass("position-absolute top-0 end-0 translate-middle-x rounded-circle");
        $(saveBtn).attr("id", "saveBtn");

        var listedMovie = document.createElement("li");
        listedMovie.innerHTML = movieName + "<br />" + "Release Date: " + movieYear;
        $(listedMovie).append(saveBtn);
        $(listedMovie).addClass("search-result-li mt-3 text-dark h-100 p-4 position-relative");
        $("#search-results").append(listedMovie);

        
        $(saveBtn).on("click", function() {
            var savedText = $(this).parent().text()
            var savedLi = document.createElement("li")


            $(savedLi).text(savedText);
            console.log(savedLi)
            $(savedLi).addClass("dropdown-item");
            
            $("#saveList").append(savedLi);

            });
      }
      console.log(response)
  })

};


//changes search input id
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
});
   
//when a value is submitted the id of the form is checked and depending on said id either the getMovieData or getGamData
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
  

var loadSaveList = () => {
    for (var i = 0; i < savedHistory.length; i++) {
        var savedListItem = document.createElement("li");
        $(savedListItem).addClass("dropdown-item")
        $(savedListItem).text(savedHistory[i]);

        $("#saveList").append(savedListItem);
    }
}

loadSaveList();