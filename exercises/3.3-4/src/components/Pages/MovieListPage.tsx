import MoviesList from "../Movie/MovieListPage";
import { MovieContext } from "../../types";
import { useOutletContext } from "react-router-dom";

const MoviePage = () => {
  const {movies, onMovieDeleted} : MovieContext = useOutletContext();

      return (
        <div>
          <h2>List of movies</h2>
          <MoviesList movies={movies} onMovieDeleted={onMovieDeleted} ></MoviesList>
        </div>
      );
}

export default MoviePage;