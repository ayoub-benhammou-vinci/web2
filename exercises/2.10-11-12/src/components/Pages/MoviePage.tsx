import { useState } from "react";
import MoviesList from "../Movie/MovieListPage";
import MovieAdd from "../Movie/MovieAdd";
import Movie from "../../types";

const MoviePage = () => {
    const myFavoritesMovies = [
        {
          title: "Harry Potter",
          director: "J.K. Rowling",
          duration: 100,
          description: "A magic history of witches",
        },
    
        {
          title: "Naruto",
          director: "Mashimato",
          duration: 200,
          description: "Ninja",
          picture:
            "https://th.bing.com/th/id/OIP.efATY6p5-5aINwEzOqYKFwAAAA?rs=1&pid=ImgDetMain",
          budget: 2,
        },
    
        {
          title: "Mario",
          director: "Nintendo",
          duration: 120,
          description: "videogames",
          budget: 10,
        },
    
        {
          title: "My Hero Academia",
          director: "Miichiya",
          duration: 140,
          description: "Hero",
          picture:
            "https://th.bing.com/th/id/OIP.3FqMW8thqkYxy0lysOlmIgHaKt?w=203&h=294&c=7&r=0&o=5&pid=1.7",
        },
    
        {
          title: "Dandadan",
          director: "Kakashimoto",
          duration: 210,
          description: "Laughing story of two persons",
        },
      ];
    
      const [movies, setMovies] = useState(myFavoritesMovies);
    
      const addMovie = (newMovie : Movie) => {
        setMovies([...movies, newMovie]);
      }
    
      return (
        <div>
    
          <h2>Add a movie</h2>
          <MovieAdd onMovieAdded={addMovie}></MovieAdd>
    
          <h2>List of movies</h2>
          <MoviesList movies={movies}></MoviesList>

        </div>
      );
}

export default MoviePage;