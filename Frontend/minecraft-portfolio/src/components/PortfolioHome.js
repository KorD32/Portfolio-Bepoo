import React, { useState } from 'react';
import '../styles/PortfolioHome.css'; 

const PortfolioHome = () => {
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg',
        'image8.jpg',
        'image9.jpg',
        'image10.jpg'
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="portfolio-home">
            <div className="portfolio-grid">
                {images.map((image, index) => (
                    <div key={index} className={`portfolio-item item-${index}`} onClick={() => setSelectedImage(image)}>
                        <img src={image} alt={`Portfolio ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Modal untuk zoom gambar */}
            {selectedImage && (
                <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => setSelectedImage(null)}>&times;</span>
                        <img src={selectedImage} alt="Zoomed" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioHome;