import React from 'react';
import '../Styles/SmallCard.css';

const SmallCard = ({ image, title, description, link }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <a href={link} className="card-button">Read More</a>
            </div>
        </div>
    );
};

export default SmallCard;