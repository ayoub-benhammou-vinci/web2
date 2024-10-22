import "./footer.css"

interface FooterProps {
    image : string; 
    children : React.ReactNode;
}

const Footer = (props : FooterProps) => {
    return (
        <footer>
            <img src={props.image} alt="logo" className="logo"/>
            <div>{props.children}</div>
        </footer>
    )
}

export default Footer;