import Movie from "../../types";
import MovieDetails from "../Movie/MovieDetails";


interface CinemaProps {
  name: string;
  movies : Movie[];
}

//On affiche chaque film et lorque l'utilisateur cliquera sur un film,
//Une description apparaitra

const Cinema = (props: CinemaProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <div>
        <ul>
          {props.movies.map(
            (movie) => <MovieDetails key={movie.title} movie={movie}/>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Cinema;
