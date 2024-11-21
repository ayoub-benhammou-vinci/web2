import { useMatch, useOutletContext } from "react-router-dom"
import { MovieContext } from "../../types"
import MovieDetails from "../Movie/MovieDetails";

const FavoriteMovie = () => {
    const {movies} : MovieContext = useOutletContext();

    //Si l'ID n'est pas de type number => KO !
    const match = useMatch("/movies/:id");
    const movieId = Number(match?.params.id); //Equivalent au parseInt()

    console.log("Match", match);
    console.log("Movie ID", movieId); //OK !

    if(isNaN(movieId)) return <p>Movie Not Found</p>


    //Si l'id du film n'existe pas dans nos données
    const movie = movies.find((movie) => movie.id === movieId);
    if(!movie) return <p>Movie Not Found</p>

    return (
        <div>
            <MovieDetails movie={movie}></MovieDetails>
        </div>
    )
}

export default FavoriteMovie;