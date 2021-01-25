import React from 'react';
import Film from './Film';
import '../FilmList.css';

const FilmList = ({films}) => {

    const filmArray = films.map(film => {
        return(
            <p className="film-list">
                <Film name={film.name} key={film.id}>{film.url}</Film>
            </p>
        )
    })
    return(
        <>
        {filmArray}
        </>
    )
}

export default FilmList;