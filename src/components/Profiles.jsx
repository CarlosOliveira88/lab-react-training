import React from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
    return (
        <div className='facebookDiv'>
            <h1>Facebook Profiles</h1>
            <ul>
                {profiles.map((profile, index) => (
                    <li key={index} className='liFacebook'>
                        <img className='imgFacebook' src={profile.img} alt={profile.firstName} />
                        <p>Nombre: {profile.firstName} {profile.lastName}</p>
                        <p>País: {profile.country}</p>
                        <p>{profile.isStudent ? 'Estudia en ironhack' : 'No estudia en ironhack'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FaceBook;
