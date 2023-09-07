import { useState } from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const uniqueCountries = [...new Set(profiles.map((profile) => profile.country))];

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
    };

    const clearSelectedCountry = () => {
        setSelectedCountry(null);
    };

    return (
        <div className='facebook'>
            <h1>Facebook Profiles</h1>
            <div>
                {uniqueCountries.map((country, index) => (
                    <div className='btnCountry'>
                        <button
                            key={index}
                            onClick={() => handleCountryClick(country)}
                            className={selectedCountry === country ? 'active' : ''}
                        >
                            {country}
                        </button>
                    </div>
                ))}
                <button onClick={clearSelectedCountry} className={selectedCountry === null ? 'active' : ''}>
                    All
                </button>
            </div>
            <ul className='facebookDiv'>
                {profiles.map((profile, index) => (
                    <li key={index} className={selectedCountry === profile.country | selectedCountry === null ? 'highlight liFacebook' : 'none'}>
                        <img className='imgFacebook' src={profile.img} alt={profile.firstName} />
                        <p>Name: {profile.firstName} {profile.lastName}</p>
                        <p>Country: {profile.country}</p>
                        <p>{profile.isStudent ? 'é aluno' : 'nao estuda aqui'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FaceBook;

