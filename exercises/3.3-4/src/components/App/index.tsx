import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../Header/NavBar";
import PageTitle from "../Pages/PageTitle";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import {AuthenticatedUser, Movie, NewMovie, User} from "../../types";
import { MovieContext } from "../../types";
import { fetchAddMovie, fetchDeleteMovie, fetchMovies } from "../../utils/film-services";
import { clearAuthenticatedUser, getAuthenticatedUser, storeAuthenticatedUser } from "../../utils/session.ts";

const App = () => {

  const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedUser | undefined>(undefined);

  const themeGet = localStorage.getItem("theme") ?? "dark";

  const [movies, setMovies] = useState<Movie[]>([]);
  //Je met dark par défaut
  const [theme, setTheme] = useState<"dark" | "light">(themeGet as "dark" | "light");

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
    const authenticatedUser = getAuthenticatedUser();
    if (authenticatedUser) {
      setAuthenticatedUser(authenticatedUser);
    }
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

  const registerUser = async (newUser: User) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("/api/auths/register", options);

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const createdUser: AuthenticatedUser = await response.json();

      setAuthenticatedUser(createdUser);
      storeAuthenticatedUser(createdUser);
      console.log("createdUser: ", createdUser);
    } catch (err) {
      console.error("registerUser::error: ", err);
      throw err;
    }
  }

  const loginUser = async (user: User) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("/api/auths/login", options);

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const authenticatedUser: AuthenticatedUser = await response.json();
      console.log("authenticatedUser: ", authenticatedUser);

      setAuthenticatedUser(authenticatedUser);
      storeAuthenticatedUser(authenticatedUser);
    } catch (err) {
      console.error("loginUser::error: ", err);
      throw err;
    }
  };

  const handleSetTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  const fullMovieContext : MovieContext = {movies, onMovieAdded, onMovieDeleted, registerUser, loginUser};

  const clearUser = () => {
    clearAuthenticatedUser();
    setAuthenticatedUser(undefined);
  }
  
  return (
    <div>
      <Header
        name="Cinemovies"
        logo="https://yt3.googleusercontent.com/ytc/AIdro_kq68990XgHB7FGrl3SAe2GOUvYYPz66h1qr83JBrC9Fvo=s900-c-k-c0x00ffffff-no-rj"
        theme={theme}
        setTheme={handleSetTheme}>
        <NavBar authenticatedUser={authenticatedUser} clearUser={clearUser}/>
      </Header>

      <PageTitle />
      <Outlet context={fullMovieContext}/>
      
      <Footer
        author="Ayoub"
        logo="https://yt3.googleusercontent.com/ytc/AIdro_kq68990XgHB7FGrl3SAe2GOUvYYPz66h1qr83JBrC9Fvo=s900-c-k-c0x00ffffff-no-rj"
        theme={theme}
      />
    </div>
  );
};

export default App;



