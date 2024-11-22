import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../Header/NavBar";
import PageTitle from "../Pages/PageTitle";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import {Movie} from "../../types";
import { MovieContext } from "../../types";

const App = () => {
  const myFavoritesMovies : Movie[] = [
    {
      id: 1,
      title: "Harry Potter",
      director: "J.K. Rowling",
      duration: 100,
      description: "A magic history of witches",
    },

    {
      id: 2,
      title: "Naruto",
      director: "Mashimato",
      duration: 200,
      description: "Ninja",
      picture:
        "https://th.bing.com/th/id/OIP.efATY6p5-5aINwEzOqYKFwAAAA?rs=1&pid=ImgDetMain",
      budget: 2,
    },

    {
      id: 3,
      title: "Mario",
      director: "Nintendo",
      duration: 120,
      description: "videogames",
      budget: 10,
    },

    {
      id: 4,
      title: "My Hero Academia",
      director: "Miichiya",
      duration: 140,
      description: "Hero",
      picture:
        "https://th.bing.com/th/id/OIP.3FqMW8thqkYxy0lysOlmIgHaKt?w=203&h=294&c=7&r=0&o=5&pid=1.7",
    },

    {
      id: 5,
      title: "Dandadan",
      director: "Kakashimoto",
      duration: 210,
      description: "Laughing story of two persons",
    },
  ];

  //Récupérer l'id du prochain film à ajouter
  //Le count est initialisé à 0
  const nextId = myFavoritesMovies.reduce((count, movie) => {
    return count > movie.id ? count : movie.id;
  }, 0) + 1;

  //Récupérer tous les titres des films dans un tableau de String
  const titles = myFavoritesMovies.map((movie) => movie.title);

  const [movies, setMovies] = useState<Movie[]>(myFavoritesMovies);
  const [moviesTitles, setMoviesTitle] = useState(titles);
  const navigate = useNavigate();

  const addMovie = (newMovie: Movie) => {
    newMovie.id = nextId;
    setMovies([...movies, newMovie]);
    setMoviesTitle([...titles, newMovie.title]);
    navigate("/movies");
  };

  const fullMovieContext : MovieContext = {movies, addMovie, moviesTitles};

  return (
    <div>
      <Header
        name="Cinemovies"
        logo="https://yt3.googleusercontent.com/ytc/AIdro_kq68990XgHB7FGrl3SAe2GOUvYYPz66h1qr83JBrC9Fvo=s900-c-k-c0x00ffffff-no-rj">
        <NavBar />
      </Header>

      <PageTitle />
      <Outlet context={fullMovieContext}/>

      <Footer
        author="Ayoub"
        logo="https://yt3.googleusercontent.com/ytc/AIdro_kq68990XgHB7FGrl3SAe2GOUvYYPz66h1qr83JBrC9Fvo=s900-c-k-c0x00ffffff-no-rj"
      />
    </div>
  );
};
export default App;
