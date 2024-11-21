import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav>
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/cinema")}>Cinema</button>
            <button onClick={() => navigate("/movies")}>Movies</button>
            <button onClick={() => navigate("/addMovie")}>Add Movie</button>
        </nav>
    );
};

export default NavBar;
