import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
    const [rValue, setRValue] = useState(0);
    const [gValue, setGValue] = useState(0);
    const [bValue, setBValue] = useState(0);

    const handleColorChange = (color, newValue) => {
        switch (color) {
            case 'r':
                setRValue(newValue);
                break;
            case 'g':
                setGValue(newValue);
                break;
            case 'b':
                setBValue(newValue);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <SingleColorPicker color="r" value={rValue} onChange={handleColorChange} />
            <SingleColorPicker color="g" value={gValue} onChange={handleColorChange} />
            <SingleColorPicker color="b" value={bValue} onChange={handleColorChange} />

            <div className='color-picker-container'
                style={{
                    backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
                    width: '100px',
                    height: '100px',
                }}
            ></div>
        </div>
    );
}

export default RGBColorPicker;