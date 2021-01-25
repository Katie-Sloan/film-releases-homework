import React from 'react';
import '../Button.css'

const Button = () => {

    const getMoreFilms = () => {
        window.location.href="https://www.imdb.com/calendar/?region=gb";
    }
    
    return(
        <button id="button" onClick={() => getMoreFilms()}>View more upcoming releases</button>
    )
}

export default Button;