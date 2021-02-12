import React from 'react';

import './Guidelines.css'

const Recommendation = props => {

    return (
        <div className="Guidelines">
            <h2>{props.category}</h2>
            <h4>{props.description}</h4>
            <div>Author: {props.authorEmail}</div>
            <div>Data de criação: {props.createdAt.toString()}</div>
            <div>Likes: {props.likes}</div>
            <div>Unlikes: {props.unlikes}</div>
        </div>
    );

}

export default Recommendation;
