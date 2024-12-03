import { Movie } from "../../types";
import MovieDetails from "./MovieDetails";
import "./Movies.css";

interface MoviesListProps {
    movies: Movie[];
    onMovieDeleted: (id: number) => Promise<void>;
}

const MoviesList = ({ movies, onMovieDeleted }: MoviesListProps) => {
    return (
        <div className="movies-list">
            {movies.map((movie) => (
                <div className="movie-item" key={movie.title}>
                    <MovieDetails movie={movie} onMovieDeleted={onMovieDeleted} />
                </div>
            ))}
        </div>
    );
};

export default MoviesList;