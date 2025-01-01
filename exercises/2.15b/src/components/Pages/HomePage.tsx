import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
const HomePage = () => {
  const { movies }: MovieContext = useOutletContext();

  return (
    <div>
      <h2>History of our cinema application</h2>
      <p>
        We love cinema, it's our passion and we want to share this passion with
        you !
      </p>
      <p>Here is the list of movies we have in our database:</p>

      <ul>
        {movies.map((movie) => (
          <li>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;