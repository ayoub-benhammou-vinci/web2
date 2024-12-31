import { MaybeAuthenticatedUser } from "../../types";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  authenticatedUser: MaybeAuthenticatedUser;
  clearUser: () => void;
}

const NavBar = ({ authenticatedUser, clearUser }: NavBarProps) => {
  const navigate = useNavigate();

  if (!authenticatedUser) {
    return (
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/register")}>
          Créer un utilisateur
        </button>
        <button onClick={() => navigate("/login")}>Se connecter</button>
      </nav>
    );
  }

  if (authenticatedUser.username == "admin") {
    return (
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/add-pizza")}>
          Ajouter une pizza
        </button>
        <button onClick={clearUser}>Se déconnecter</button>
      </nav>
    );
  }

  if (authenticatedUser) {
    return (
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={clearUser}>Se déconnecter</button>
      </nav>
    );
  }
};

export default NavBar;
