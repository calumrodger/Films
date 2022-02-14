import React from "react";

const Film = ({id, name, url}) => {

    return(
        <>
        <p>{id}</p>
        <h2>{name}</h2>
        <h3><a href={url}>Find out more at IMDB</a></h3>
        </>
    )
}

export default Film;