import { useState } from 'react';
import sinGafas from "../images/sin-gafas.jpg";
import conGafas from "../images/con-gafas.jpg";

const ClickablePicture = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div>
            <img className='img-gafas'
                src={isClicked ? conGafas : sinGafas}
                alt="Imagen"
                onClick={handleClick}
            />
        </div>
    );
};

export default ClickablePicture;
