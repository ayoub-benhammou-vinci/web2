import "./Header.css";

interface HeaderProps {
  name: string;
  logo: string;
  children: React.ReactNode;
}

const Header = ({ name, logo, children }: HeaderProps) => {
  return (
    <header className="header">
      <div className="menu">
        <h2>{name}</h2>
        <img src={logo} alt="logo" id="logo" />
      </div>
      <div id="navbar">{children}</div>
    </header>
  );
};

export default Header;
