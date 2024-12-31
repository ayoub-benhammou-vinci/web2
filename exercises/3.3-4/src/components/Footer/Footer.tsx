import "./Footer.css";

interface FooterProps {
    author: string,
    logo: string,
    theme : "dark" | "light"
}

const Footer = ({author, logo, theme} : FooterProps) => {
    return (
        <footer id="footer"
        style={{backgroundColor: theme === "dark" ? "black" : "white"
            , color: theme === "dark" ? "white" : "black"
        }}>
            <h2>This page is realised by {author}</h2>
            <p><img src={logo} alt="logo" id="logo"/></p>
        </footer>
    )
}

export default Footer;