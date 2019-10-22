import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NotFound.scss';

const notFound = (props: any) => {
    return (
        <div className="NotFound">
            <h1>Not found.</h1>
            <button className="Large" onClick={() => props.history.push('/')}>
                <FontAwesomeIcon icon="home"></FontAwesomeIcon>
                Go Home
            </button>
        </div>
    );
}

export default notFound;