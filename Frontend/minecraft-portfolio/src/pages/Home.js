import React from "react";
import Header from "../components/Header";
import PortfolioHome from "../components/PortfolioHome";
import Footer from "../components/Footer";
import { Button } from "@mui/material";
import "../styles/Home.css";

const description = "Lorem ipsum blbalblblalbalasjdasdasjdajsdjasdjasjdasdjasdjasjdjasdjasjda jsdjasdjasjdjasdjasjdaj djsajdasjksadkaskdkasdkaksdaksdkaskdaksdksakdaskdkaskdkas";

const Home = () => {
    return (
        <div>
            <Header />
            <main className="home-content">
                <div className="home-header">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Bepoo Profile" className="profile-image" />
                    <div className="home-text">
                        <h1 className="home-title" >Hi, It's Bepoo</h1>
                        <h2 className="home-position">I'm a Minecraft Artist</h2>
                        <p className="description">{description}</p>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={() => window.location.href = "mailto:vinwijaya327@gmail.com"}
                        >
                            Bepoo
                        </Button>
                    </div>
                </div>
            </main>
            <PortfolioHome />
            <Footer />
        </div>
    );
}

export default Home;