import Movie from "../types";
import "./Movies.css"

interface MovieProps {
  movie: Movie;
}

const MovieDetails = ({ movie }: MovieProps) => {
  return (
    <div className="moviesTable">
      <p>Title : {movie.title}</p>
      <p>Director : {movie.director}</p>
      <p>Duration : {movie.duration}</p>
      {movie.picture ? <p>Picture : <img src={movie.picture} alt="image"/></p> : null}
      {movie.description ? <p>Description : {movie.description}</p> : null}
      {movie.budget ? <p>Budget : {movie.budget}</p> : null}
    </div>
  );
};

export default MovieDetails;
