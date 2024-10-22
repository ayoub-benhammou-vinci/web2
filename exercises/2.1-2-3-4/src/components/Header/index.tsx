import "./header.css"

interface HeaderProps {
    image : string;
    children : React.ReactNode;
}

const Header = (props : HeaderProps) => {
    return (
       <header>
            <img src={props.image} alt="logo" className="logo"/>
            <div>{props.children}</div>
       </header>
    )
}

export default Header;