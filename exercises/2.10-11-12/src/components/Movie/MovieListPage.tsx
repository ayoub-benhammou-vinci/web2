import Movie from "../../types";
import MovieDetails from "./MovieDetails";
import "./Movies.css";

interface MoviesListProps {
    movies: Movie[];
}

const MoviesList = ({ movies }: MoviesListProps) => {
    return (
        <div className="movies-list">
            {movies.map((movie) => (
                <div className="movie-item" key={movie.title}>
                    <MovieDetails movie={movie} />
                </div>
            ))}
        </div>
    );
};

export default MoviesList;