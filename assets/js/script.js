// var gameSearch = document.getElementById("game-search");
// var game;

// var apiUrl = "https://api.rawg.io/api/games?search=" + game + "&key=1162dfcd4c004cc3adeeaa606112ab38";

// var getGameData = function(e) {
//   e.preventDefault();
//   game = gameSearch.value;

//   fetch(apiUrl).then(function(response) {
//     if (response.ok) {
//       response.json().then(function(response) {
//         for (i = 0; i < response.results.length; i++) {
//           console.log(response.results[i]);
//         }
//       });
//     }
//     else {
//       console.log("Bad response found");
//     }
//   });
// }






// gameSearch.addEventlistener("submit", getGameData);