import "./Footer.css";

interface FooterProps {
    author: string,
    logo: string
}

const Footer = ({author, logo} : FooterProps) => {
    return (
        <footer id="footer">
            <h2>This page is realised by {author}</h2>
            <p><img src={logo} alt="logo" id="logo"/></p>
        </footer>
    )
}

export default Footer;