import getMovieData from "../requests";
import Movie from "./Movie";

export default function SearchBar(props) {
  async function handleSubmit(event) {
    event.preventDefault();
    const userQuery = event.target.movieSearch.value;
    const Moviedata = await getMovieData(userQuery);
    if (Moviedata.Title === undefined || Moviedata.Title === "") {
      return;
    }
    const newMovieList = [...props.movieList];
    const newMovie = <Movie {...Moviedata} key={newMovieList.length}></Movie>;
    newMovieList.push(newMovie);
    props.setMovieList(newMovieList);
  }

  return (
    <div className="searchbar">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="movieSearch">Search Show/Movie</label>
        <input type="text" name="movieSearch" id="movieSearch" />
        <button>Search</button>
      </form>
    </div>
  );
}
