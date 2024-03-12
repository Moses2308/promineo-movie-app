import getMovieData from "../requests";
const movie = await getMovieData("Dune");

function Movie() {
  return (
    <>
      <article className="movie">
        <img src={movie.Poster} alt="Movie Poster" />
        <div className="movie__info">
          <h1 className="movie--title">{movie.Title}</h1>
          <p className="movie--year">Release Year : {movie.Year}</p>
          <p className="movie--genre">Genre : {movie.Genre}</p>
          <p className="movie--ageRating">Rated : {movie.Rated}</p>
        </div>
        <p className="movie--synopsis">{movie.Plot}</p>
      </article>
    </>
  );
}

export default Movie;
