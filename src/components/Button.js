import React from 'react';

const Button = () => {

    const getMoreFilms = () => {
        window.location.href="https://www.imdb.com/calendar/?region=gb";
    }
    
    return(
        <button onClick={() => getMoreFilms()}>View more upcoming releases</button>
    )
}

export default Button;