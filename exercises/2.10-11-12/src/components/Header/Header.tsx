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
        <h2 className="header-title">{name}</h2>
        <img src={logo} alt="logo" id="logo" className="header-logo" />
      </div>
      <nav id="navbar" className="header-navbar">{children}</nav>
    </header>
  );
};

export default Header;
