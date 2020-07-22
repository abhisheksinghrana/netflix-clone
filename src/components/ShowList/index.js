import React from 'react';
import ShowItem from '../ShowItem';
import './ShowList.scss';

function ShowList(props) {
    return (
        <div className="row">
            <h2 className="heading">Heading</h2>
            <div className="show-section">
                {props.data.map(item => (
                    <ShowItem key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}

export default ShowList;