import "./index.css";
import "./App.css";
import getMovieData from "./requests";
import Movie from "./components/Movie";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

const movie = await getMovieData("Big");

function App() {
  const [movieList, setMovieList] = useState([]);
  const listWrapper = { movieList, setMovieList };
  return (
    <>
      <SearchBar {...listWrapper}></SearchBar>
      {movieList}
    </>
  );
}

export default App;
