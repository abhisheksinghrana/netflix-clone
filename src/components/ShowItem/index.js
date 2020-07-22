import React from 'react';
import './Show.scss';

function ShowItem(props) {
    return <>
        <img className="show-item" src={`https://image.tmdb.org/t/p/original/${props.data.backdrop_path}`} />
    </>
}

export default ShowItem;