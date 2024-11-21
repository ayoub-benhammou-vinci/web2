import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import MovieAdd from "../Movie/MovieAdd";

const AddMoviePage = () => {
    const {addMovie} : MovieContext = useOutletContext();
    return (
        <div>
            <h2>Add a movie</h2>
            <MovieAdd onMovieAdded={addMovie}></MovieAdd>
        </div>
    )
}

export default AddMoviePage;