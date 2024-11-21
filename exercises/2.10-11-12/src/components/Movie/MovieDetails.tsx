import Movie from "../../types";
import "./Movies.css";

interface MovieProps {
  movie: Movie;
}

const MovieDetails = ({ movie }: MovieProps) => {
  return (
    <div className="movie-details">
      <p className="movie-title">Title: {movie.title}</p>
      <p className="movie-director">Director: {movie.director}</p>
      <p className="movie-duration">Duration: {movie.duration} minutes</p>
      {movie.picture ? (
        <p className="movie-picture">
          Picture: <img src={movie.picture} alt="image" />
        </p>
      ) : null}
      {movie.description ? (
        <p className="movie-description">Description: {movie.description}</p>
      ) : null}
      {movie.budget ? (
        <p className="movie-budget">Budget: ${movie.budget} million</p>
      ) : null}
    </div>
  );
};

export default MovieDetails;
