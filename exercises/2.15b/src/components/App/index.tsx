import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../Header/NavBar";
import PageTitle from "../Pages/PageTitle";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import {Movie, NewMovie} from "../../types";
import { MovieContext } from "../../types";
import { fetchAddMovie, fetchDeleteMovie, fetchMovies } from "../../utils/film-services";

const App = () => {

  const [movies, setMovies] = useState<Movie[]>([]);

  const navigate = useNavigate();

  //Rappel : Les méthodes "fetch" renvoie du JSON !
  const getAllMovies = async () => {
    try {
      const moviesAsync = await fetchMovies();
      console.log("moviesAsync : ", moviesAsync); //OK !
      setMovies(moviesAsync);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  const onMovieAdded = async (newMovie: NewMovie) => {

    console.log("createdMovie : ", newMovie);
    try {
      const createdMovie = await fetchAddMovie(newMovie);
      console.log("createdMovie : ", createdMovie);
      await getAllMovies(); //On recharge la liste des films
      navigate("/movies");
    } catch (error) {
      console.error(error);
    }
  };

  const onMovieDeleted = async (id: number) => {
    console.log("deleteMovieId : ", id);
    try {
      await fetchDeleteMovie(id);
      console.log("deletedMovie ok ");
      await getAllMovies();
      navigate("/movies");
    } catch (error) {
      console.error(error);
    }
  }

  const fullMovieContext : MovieContext = {movies, onMovieAdded, onMovieDeleted};

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
