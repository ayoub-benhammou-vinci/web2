import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { MaybeAuthenticatedUser } from "../../types";
interface NavBarProps {
    authenticatedUser: MaybeAuthenticatedUser;
    clearUser: () => void;
}

const NavBar = ({authenticatedUser, clearUser} : NavBarProps) => {
    const navigate = useNavigate();

    
    
    if (authenticatedUser) {
        return (
            <nav>
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/cinema")}>Cinema</button>
                <button onClick={() => navigate("/movies")}>Movies</button>
                <button onClick={() => navigate("/addMovie")}>Add Movie</button>
                <button onClick={() => clearUser()}>Se déconnecter</button>
            </nav>
        );
    }

    return (
        <nav>
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/cinema")}>Cinema</button>
            <button onClick={() => navigate("/movies")}>Movies</button>
            <button onClick={() => navigate("/register")}>Register</button>
            <button onClick={() => navigate("/login")}>Se connecter</button>
        </nav>
    );
};

export default NavBar;
