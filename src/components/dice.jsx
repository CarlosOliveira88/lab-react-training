import React, { useState } from 'react';
import dice0 from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = () => {
    const [diceImage, setDiceImage] = useState(dice1);
    const [isRolling, setIsRolling] = useState(false);

    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

    const rollDice = () => {
        if (!isRolling) {
            setIsRolling(true);
            setDiceImage(dice0);

            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * diceImages.length);
                setDiceImage(diceImages[randomIndex]);
                setIsRolling(false);
            }, 1000);
        }
    };

    return (
        <div className='dice-image'>
            <img className='dado'
                src={diceImage}
                alt="Dice"
                onClick={rollDice}
                style={{ cursor: 'pointer' }}
            />
        </div>
    );
};

export default Dice;
