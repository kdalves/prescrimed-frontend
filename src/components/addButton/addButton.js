import React from 'react';
import { Link } from 'react-router-dom';
import addIcon from '../../images/new-plus.png';


function addButton({ text, route }) {
    return (
        <p align="right">
            <Link to={`/${route}`}>{text}<img src={addIcon} alt={text} width="25px" height="25px" /></Link>
        </p>
    );
}

export default addButton;