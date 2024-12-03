import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import MovieAdd from "../Movie/MovieAdd";

const AddMoviePage = () => {
    const {onMovieAdded} : MovieContext = useOutletContext();
    return (
        <div>
            <h2>Add a movie</h2>
            <MovieAdd onMovieAdded={onMovieAdded}></MovieAdd>
        </div>
    )
}

export default AddMoviePage;