import { SyntheticEvent, useState } from "react"
import "./MoviesAdd.css"
import { NewMovie } from "../../types";

interface AddMovieFormProps {
    onMovieAdded: (movie: NewMovie) => void;
}

const MovieAdd = ({onMovieAdded} : AddMovieFormProps) => {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [duration, setDuration] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState(0);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log("submit : ", title, director, duration, imageUrl, description, budget);
        
        onMovieAdded({title, director, duration, imageUrl, description, budget});

        setTitle("");
        setDirector("");
        setDuration(0);
        setImageUrl("");
        setDescription("");
        setBudget(0);
    }

    const handleTitleChange = (e: SyntheticEvent) => {
        const titleInput = e.target as HTMLInputElement;
        setTitle(titleInput.value);
    }

    const handleDirectorHandle = (e: SyntheticEvent) => {
        const directorInput = e.target as HTMLInputElement;
        setDirector(directorInput.value);
    }

    const handleDurationChange = (e: SyntheticEvent) => {
        const durationInput = e.target as HTMLInputElement;
        setDuration(parseInt(durationInput.value));
    }

    const handlePictureChange = (e: SyntheticEvent) => {
        const pictureInput = e.target as HTMLInputElement;
        setImageUrl(pictureInput.value);
    }

    const handleDescriptionChange = (e: SyntheticEvent) => {
        const descriptionInput = e.target as HTMLInputElement;
        setDescription(descriptionInput.value);
    }

    const handleBudgetChange = (e: SyntheticEvent) => {
        const budgetInput = e.target as HTMLInputElement;
        setBudget(parseInt(budgetInput.value))
    }

    return (
        <div className="moviesForm">
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Title : </p>
                    <input 
                    type="text" 
                    value={title}
                    name="title"
                    onChange={handleTitleChange}
                    required/>
                </div>

                <div>
                    <p>Director : </p>
                    <input 
                    type="text"
                    name="director"
                    value={director}
                    onChange={handleDirectorHandle}
                    required/>
                </div>

                <div>
                    <p>Duration : </p>
                    <input 
                    type="number"
                    name="duration"
                    value={duration}
                    onChange={handleDurationChange}
                    required 
                    min="1"/>
                </div>

                <div>
                    <p>Picture :</p>
                    <input 
                    type="text"
                    name="picture"
                    value={imageUrl}
                    onChange={handlePictureChange}/>
                </div>

                <div>
                    <p>Description : </p>
                    <input 
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleDescriptionChange}/>
                </div>

                <div>
                    <p>Budget : </p>
                    <input 
                    type="number"
                    name="budget"
                    value={budget}
                    onChange={handleBudgetChange} 
                    min="1"
                    />
                </div>

                <input type="submit" value="Add Film"/>
            </form>
        </div>
    )
};

export default MovieAdd;