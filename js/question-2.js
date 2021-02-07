const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

let gamesContainer = document.querySelector(".games");

const options = { "headers": {
    "x-rapidapi-key": "f1f6bf4f35msh6bce51834ab65fep1142d8jsne932f1fff042",
}};

fetch(url)
 .then(function(response) {
    return response.json();
})
 .then(function(data) {
    displayGames(data);
})
 .catch(function(error) {
    gamesContainer.innerHTML = "An error has occured";
})

function displayGames(results) {
    const games = results.all;
    gamesContainer.innerHTML = "";
    
    for (let i = 0; i < games.length; i++) {

        if (i === 8) {
            break;
        }
    }

    gamesContainer.innerHTML += `<div class="games"><h2>Name: ${games[i].name} </h2> 
    <h2>Rating: ${games[i].rating} </h2>
    <h2>Tags: ${games[i].tags}</div>`;

    
}

// I dont know what I'm doing wrong here. I tried the async method but I got an answer back saying that length was undefined? 




