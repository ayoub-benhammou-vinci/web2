import { useEffect, useState } from "react";
import "./App.css";

interface Joke {
  category: string;
  joke: string;
}

function App() {
  const [joke, setJoke] = useState<Joke>();

  const fetchJoke = () => {
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
    }

  useEffect(() => {
    //Fetch le joke la première fois 
      fetchJoke();

      const interval = setInterval(() => {
        fetchJoke(); //Va faire un nouveau refresh toutes les 10 secondes
      }, 10000);

      return () => clearInterval(interval);
      
  }, []);


  //Si jamais le joke a mal été récupérer
  if (!joke) {
    return <div>Le joke a mal été récupéré</div>
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
