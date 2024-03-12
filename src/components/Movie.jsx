import getMovieData from "../requests";
const movie = await getMovieData("lorax");

function Movie() {
  return (
    <>
      <article className="movie">
        <img className="movie--poster" src={movie.Poster} alt="Movie Poster" />
        <div className="movie__info">
          <h2 className="movie--title">{movie.Title}</h2>
          <p className="movie--genre">Genre : {movie.Genre}</p>
          <p className="movie--year">Release Year : {movie.Year}</p>
          <p className="movie--ageRating">Rated : {movie.Rated}</p>
          <h3>Synopsis</h3>
          <p className="movie--synopsis">{movie.Plot}</p>
        </div>
        <div className="movie__rating"></div>
      </article>
    </>
  );
}

export default Movie;
