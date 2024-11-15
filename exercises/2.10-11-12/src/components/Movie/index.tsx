import Movie from "../../types";
import MovieDetails from "./MovieDetails";

interface MoviesListProps {
    movies : Movie[];
}

const MoviesList = ({movies} : MoviesListProps) => {
    return (
        <div>
            {movies.map((movie) => (<MovieDetails movie={movie}/>))}
        </div>
    );
};

export default MoviesList;