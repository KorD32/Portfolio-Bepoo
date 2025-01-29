import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Bepoo. All rights reserved.</p>
                <div className="footer-icons">
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="icon-container">
                        <FontAwesomeIcon icon={faDiscord} size="lg" className="icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-container">
                        <FontAwesomeIcon icon={faTwitter} size="lg" className="icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
