import { useEffect, useState } from "react";
import "./App.css";

interface Joke {
  category: string;
  joke: string;
}

function App() {
  const [joke, setJoke] = useState<Joke>();

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((reponse) => {
        if (!reponse.ok) {
          throw new Error(
            `Fetch error : ${reponse.status} : ${reponse.statusText}`
          );
        }
        return reponse.json();
      })
      .then((data) => {
        setJoke({
          category: data.category ?? "No joke category", //?? est pour les valeurs par défaut
          joke: data.joke ?? "No joke",
        })
      })
      .catch((error) => {
        console.error("Error : " + error);
      });
  }, []);

  //Si jamais le joke a mal été récupérér
  if (!joke) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>A refresh, a joke !</h2>
      <p>Category of the joke : {joke?.category}</p>
      <p>The joke : {joke?.joke}</p>
    </div>
  )
}

export default App;
