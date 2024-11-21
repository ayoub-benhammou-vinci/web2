import { useOutletContext } from "react-router-dom";
import { MovieAddContext } from "../../types";
import MovieAdd from "../Movie/MovieAdd";

const AddMoviePage = () => {
    const {addMovie} : MovieAddContext = useOutletContext();
    return (
        <div>
            <h2>Add a movie</h2>
            <MovieAdd onMovieAdded={addMovie}></MovieAdd>
        </div>
    )
}

export default AddMoviePage;