import React from "react";
import Film from "./Film";

const FilmsList = ({films}) => {

    const filmNodes = films.map(film => {
        return (
            <Film name={film.name} id={film.id} url={film.url}/>
        );
    });

    return(
        <>
        {filmNodes}
        </>
    )
}

export default FilmsList;