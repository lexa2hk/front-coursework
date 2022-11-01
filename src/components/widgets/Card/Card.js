import React from 'react';
import './styleCard.css';
import IssImg from '../../../images/iss.png';

function Card(props) {
    let iconObj = {"iss": IssImg}
    return (
        <div className="card">
            <img src={iconObj[props.image]} alt="Avatar" />
            <h3>{props.object}</h3>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;