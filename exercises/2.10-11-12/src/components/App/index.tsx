import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar";
import PageTitle from "../Pages/PageTitle";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const App = () => {

    return (
        <div>
            <Header name="Cinemovies" 
            logo="https://yt3.googleusercontent.com/ytc/AIdro_kq68990XgHB7FGrl3SAe2GOUvYYPz66h1qr83JBrC9Fvo=s900-c-k-c0x00ffffff-no-rj">
            <NavBar/>
            </Header>

            <PageTitle/>
            <Outlet/>

            <Footer author="Ayoub" 
            logo="https://yt3.googleusercontent.com/ytc/AIdro_kq68990XgHB7FGrl3SAe2GOUvYYPz66h1qr83JBrC9Fvo=s900-c-k-c0x00ffffff-no-rj"/>

        </div>
    )
  

  

};
export default App;
