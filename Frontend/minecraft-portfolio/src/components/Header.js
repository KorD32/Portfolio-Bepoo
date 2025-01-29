import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Bepoo</h1>
            <nav className="header-nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Portfolio</a></li>
                    <li>
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faDiscord} size="lg" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
