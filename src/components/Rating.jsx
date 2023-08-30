import React from 'react';
import EstrellaDorada from "../images/estrela-dorada.png"
import EstrellaNegra from "../images/estrela-negra.png"
import EstrellaRoja from "../images/estrela-roja.png"


const Rating = ({ children }) => {
    const filledStars = Math.round(children); // Redondear al número entero más cercano
    const emptyStars = 5 - filledStars;


    return (
        <div className="rating">
            {[...Array(filledStars)].map((_, index) => (
                <span key={index} className="star">
                    <img src={children > 3 ? EstrellaDorada : EstrellaRoja} />
                </span>
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <span key={index} className="star">
                    <img src={EstrellaNegra} />
                </span>
            ))}

            <span className={`numeroOriginal ${children < 3 ? 'bajo' : 'alto'}`}>{children}</span>


        </div>

    );
}

export default Rating;
