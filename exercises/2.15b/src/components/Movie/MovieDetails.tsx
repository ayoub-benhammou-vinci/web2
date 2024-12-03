import { SyntheticEvent } from "react";
import { Movie } from "../../types";
import "./Movies.css";

interface MovieProps {
  movie: Movie;
  onMovieDeleted: (id: number) => Promise<void>; //Car le DELETE dans le back-end a un seul paramètre ID
}


const MovieDetails = ({ movie, onMovieDeleted }: MovieProps) => {  

  const handleSubmit = (e: SyntheticEvent) => {
      e.preventDefault();
      console.log("submit : ", movie.title, movie.director, movie.duration, movie.imageUrl, movie.description, movie.budget);
      onMovieDeleted(movie.id);
  }

  return (
    <div className="movie-details">
      <p className="movie-title">Title: {movie.title}</p>
      <p className="movie-director">Director: {movie.director}</p>
      <p className="movie-duration">Duration: {movie.duration} minutes</p>
      {movie.imageUrl ? (
        <p className="movie-picture">
          Picture: <img src={movie.imageUrl} alt="image" />
        </p>
      ) : null}
      {movie.description ? (
        <p className="movie-description">Description: {movie.description}</p>
      ) : null}
      {movie.budget ? (
        <p className="movie-budget">Budget: ${movie.budget} million</p>
      ) : null}

      <form onSubmit={handleSubmit}>
        <input type="submit" value="DELETE" />
      </form>

    </div>
  );
};

export default MovieDetails;
