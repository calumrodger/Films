import React from "react";

const Film = ({id, name, url}) => {

    return(
        <>
        <h2><a href={url}>{name}</a></h2>
        </>
    )
}

export default Film;