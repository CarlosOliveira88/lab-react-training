import React from 'react';

const BoxColor = ({ r, g, b }) => {
    const backgroundColor = `rgb(${r}, ${g}, ${b})`;

    return (
        <div className="BoxColor" style={{ backgroundColor }}>
            <p>{backgroundColor}</p>
        </div>
    );
}

export default BoxColor;


