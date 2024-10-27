import "./App.css";
import Cinema from "../Cinema";
import PageTitle from "../PageTitle";
import Footer from "../Footer";
import Header from "../Header";

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 = [
  {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  },
  {
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
  },
  {
    title: "INCEPTION",
    director: "Christopher Nolan",
  },
  {
    title: "PARASITE",
    director: "Bong Joon-ho",
  },
];

const cinema2Name = "UGC Toison d'Or";

const moviesCinema2 = [
  {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  },
  {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  },
  {
    title: "TENET",
    director: "Christopher Nolan",
  },
  {
    title: "THE IRISHMAN",
    director: "Martin Scorsese",
  },
]; 


  return (
    <div>
      <Header image="https://img.freepik.com/vecteurs-premium/modele-conception-logo-film-camera-cinema_527727-210.jpg">
        <p>Logo Pizza Guy</p>
      </Header>

      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movies= {moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />

      <Footer image="https://img.freepik.com/vecteurs-premium/modele-conception-logo-film-camera-cinema_527727-210.jpg">
        <p>Logo Pizza Guy</p>
      </Footer>
    </div>
  );
};

export default App;
