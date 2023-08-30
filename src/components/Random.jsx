import React from 'react';

const Random = ({ min, max }) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return (
        <div className="random-container">
            <h1 className="random-number">
                Random value between {min} and {max} =&gt; {randomNumber}
            </h1>
        </div>
    )

}


export default Random;