import React from 'react';

const DriverCard = ({ name, rating, img, car }) => {
    return (
        <div className="driver-card">
            <img src={img} alt={name} className="driver-img" />
            <div className="driver-info">
                <h2>{name}</h2>
                <p>{'★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating))}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    );
}

export default DriverCard;
