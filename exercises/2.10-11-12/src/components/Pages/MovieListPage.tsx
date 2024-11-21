import MoviesList from "../Movie/MovieListPage";
import MovieAdd from "../Movie/MovieAdd";
import { MovieAddContext } from "../../types";
import { useOutletContext } from "react-router-dom";

const MoviePage = () => {
  const {movies} : MovieAddContext = useOutletContext();

      return (
        <div>
          <h2>List of movies</h2>
          <MoviesList movies={movies}></MoviesList>
        </div>
      );
}

export default MoviePage;