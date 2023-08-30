import React from 'react';

const Greetings = ({ lang, children }) => {

    let greetingText = "";
    switch (lang) {
        case 'de':
            greetingText = `Hallo ${children}!`;
            break;
        case "en":
            greetingText = `Hello ${children}!`;
            break
        case "es":
            greetingText = `Hola ${children}!`;
            break
        case "fr":
            greetingText = `Bonjour ${children}!`;
            break
        case "pt":
            greetingText = `Eai, blz ${children}!`;
            break
        default:
            greetingText = `Hola ${children}!`;
    }


    return (

        <div className={`Greetings ${lang}`}>
            <p>{greetingText}</p>
        </div>

    )
}


export default Greetings;