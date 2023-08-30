import React from 'react';
import Visa from "../images/visa-card.png";
import Master from "../images/mastercard.png";
import ChipIcon from "../images/chip.png";
import wifi from "../images/wifi-creditCard.png";

const CreditCard = ({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
}) => {
    const lastFourDigits = number.slice(-4);

    const cardStyle = {
        backgroundColor: bgColor,
        color: color,
    };

    const cardLogo = type === 'Visa' ? Visa : Master;



    return (
        <div className="credit-card" style={cardStyle}>
            <div className="icons">
                <img src={ChipIcon} alt="Chip Icon" className="chip-icon" />
                <div className="bank">{bank}</div>
                <img src={wifi} alt="WiFi Icon" className="wifi-icon" />
            </div>

            <div className="number">****  ****  **** **** ****  {lastFourDigits}</div>
            <div className="expiration">
                Expires {expirationMonth}/{expirationYear}
            </div>


            <div className="type">
                <div className="owner">{owner}</div>
                <img
                    src={cardLogo}
                    alt={type}
                    className="card-logo"
                />

            </div>
        </div>
    );
}

export default CreditCard;

