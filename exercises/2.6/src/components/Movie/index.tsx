import { useState } from "react";
import './Movie.css'

interface Movie {
    title : string;
    director : string;
    description?: string;
}

interface MovieProps {
    movie : Movie;
}

//On travaille sur un objet dans ce fichier car on veut que dans chaque clique d'un film
//Il y a une appartition de la description, si on mettrait un tableau et qu'il y aurait 
//Le Onclick par dessus, lorsqu'on clique sur le un film => TOUTES les descriptions seront ouvertes/fermés
// => Ce n'est pas ce que l'on veut !
//Solution : Mettre la fonction onClick pour chaque objet de type Movie

const Movie = ({movie} : MovieProps) => {

    const [descriptionView, setDescriptionView] = useState(false);

    const handleDescriptionView = () => {
        setDescriptionView(!descriptionView);
    }

    return (
        <li onClick={handleDescriptionView}>
            <strong>{movie.title}</strong> - {movie.director}

            {descriptionView ? <p className="descriptionMovie">{movie.description}</p> : null}
        </li>
    )
}

export default Movie;