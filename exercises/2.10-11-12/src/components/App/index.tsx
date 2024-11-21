import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../Header/NavBar";
import PageTitle from "../Pages/PageTitle";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import {Movie} from "../../types";
import { MovieAddContext } from "../../types";

const App = () => {
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
  const navigate = useNavigate();

  const addMovie = (newMovie: Movie) => {
    setMovies([...movies, newMovie]);
    navigate("/movies");
  };

  const fullMovieContext : MovieAddContext = {movies, addMovie};

  return (
    <div>
      <Header
        name="Cinemovies"
        logo="https://yt3.googleusercontent.com/ytc/AIdro_kq68990XgHB7FGrl3SAe2GOUvYYPz66h1qr83JBrC9Fvo=s900-c-k-c0x00ffffff-no-rj"
      >
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
