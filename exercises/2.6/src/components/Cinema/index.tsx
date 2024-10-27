import Movie from "../Movie";


interface CinemaProps {
  name: string;
  movies : Movie[];
}

//On affiche chaque film et lorque l'utilisateur cliquera sur un film,
//Une description apparaitra :D

const Cinema = (props: CinemaProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <div>
        <ul>
          {props.movies.map(
            (movie) => <Movie key={movie.title} movie={movie}/>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Cinema;
