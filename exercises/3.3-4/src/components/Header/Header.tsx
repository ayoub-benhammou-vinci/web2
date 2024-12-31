import "./Header.css";

interface HeaderProps {
  name: string;
  logo: string;
  children: React.ReactNode,
  theme: "dark" | "light",
  setTheme: () => void
}

const Header = ({ name, logo, children, theme, setTheme}: HeaderProps) => {
  return (
    <header className="header"
    style={{backgroundColor: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black"}}>
      <div className="menu">
        <h2 className="header-title">{name}</h2>
        <img src={logo} alt="logo" id="logo" className="header-logo" />
      </div>
      <nav id="navbar" className="header-navbar">{children}</nav>

      <button onClick={setTheme}
      style={{backgroundColor: "blue", color: "white"}}>
        {theme === "dark" ? "🌞" : "🌙"}
      </button>

    </header>
  );
};

export default Header;
