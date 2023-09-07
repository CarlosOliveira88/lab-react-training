import React, { useState } from 'react';

function SingleColorPicker({ color, value, onChange }) {
    return (
        <div>
            <label htmlFor={`${color}-value`}>{color.toUpperCase()}:</label>
            <input
                type="number"
                id={`${color}-value`}
                name={`${color}-value`}
                min="0"
                max="255"
                value={value}
                onChange={(e) => onChange(color, parseInt(e.target.value))}
            />
        </div>
    );
}
export default SingleColorPicker;