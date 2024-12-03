import { Movie, NewMovie } from "../types";

//Ce fichier contient tous les envoies de requêtes vers le serveur (JSON)
const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch("/api/films");

    if (!response.ok) {
      throw new Error(
        `fetch error : ${response.status} - ${response.statusText}`
      );
    }

    const moviesAsync = await response.json();
    return moviesAsync;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const fetchAddMovie = async (newMovie: NewMovie): Promise<Movie> => {
    console.log("newMovie : ", newMovie);
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      }
    };

    //Mon problème vient d'ici, il faut que ça renvoie localhost:3000/films 
    const response = await fetch("/api/films", options);
    if (!response.ok) {
      throw new Error(
        `fetch error : ${response.status} - ${response.statusText}`
      );
    }
    const movieCreated = await response.json();
    console.log("Movie : " + movieCreated);
    return movieCreated;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchMovies, fetchAddMovie };
