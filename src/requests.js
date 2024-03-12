const API_KEY = "92862922";
async function getMovieData(movieName) {
  let response = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&t=${movieName}`
  );

  let data = await response.json();

  console.log(data);
}

getMovieData("Lorax");
