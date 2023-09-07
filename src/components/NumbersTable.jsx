import React from 'react';

const NumbersTable = ({ limit }) => {
    const numbers = [];

    for (let i = 1; i <= limit; i++) {
        numbers.push(i);
    }

    return (
        <div className="numbers-table">
            <ul>
                {numbers.map((number) => (
                    <li
                        key={number}
                        className={number % 2 === 0 ? 'even' : 'odd'} // Aplica clases para estilos de fondo
                    >
                        {number}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NumbersTable;
