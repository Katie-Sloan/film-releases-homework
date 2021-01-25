import React from 'react';

const Button = () => {

    const getMoreFilms = () => {
        <p>More Films</p>
    }
    
    return(
        <button onClick={() => getMoreFilms()}>View more upcoming releases</button>
    )
}

export default Button;