import React, { useState } from 'react';

const LikeButton = () => {
    const [likes, setLikes] = useState(0);
    const [bgColorIndex, setBgColorIndex] = useState(0);
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red',
        'pink', 'teal', 'violet', 'indigo', 'brown', 'cyan',
        'lime', 'magenta', 'navy', 'olive', 'salmon', 'tomato',
        'turquoise', 'chocolate', 'dodgerblue', 'gold', 'gray',
        'khaki', 'lavender', 'maroon', 'peru', 'sienna', 'slateblue',
    ];


    const handleLikeClick = () => {
        setLikes(likes + 1);
        setBgColorIndex((bgColorIndex + 1) % colors.length);
        // está utilizando el operador de módulo (%) para asegurarse de que bgColorIndex nunca exceda los límites de la matriz colors.
    };

    const resetButton = () => {
        setLikes(0);
        setBgColorIndex(0);
    }

    const buttonStyle = {
        backgroundColor: colors[bgColorIndex],
    };

    return (
        <div>
            <button className='buttonLike' style={buttonStyle} onClick={handleLikeClick}>
                {likes} Likes
            </button>
            <button className='resetLike' onClick={resetButton}>
                Reset
            </button>
        </div>
    );
};

export default LikeButton;
