import "./index.css";
import "./App.css";
import getMovieData from "./requests";
import Movie from "./components/Movie";

const movie = await getMovieData("one piece");
function App() {
  return (
    <>
      <Movie {...movie}></Movie>
    </>
  );
}

export default App;
