import React from 'react';

import ScrollingText from '../../components/UI/ScrollingText/ScrollingText';
import styles from './About.module.scss';

const about = () => {
    const abilities = [
        { id: 0, label: 'software developer' },
        { id: 1, label: 'researcher' },
        { id: 2, label: 'UX hobbyist' },
        { id: 3, label: 'tinkerer' },
        { id: 4, label: 'curious mind' },
        { id: 5, label: 'full-stack developer' },
    ];

    return (
        <div className={styles.About}>
            <div>Highly motivated <ScrollingText items={abilities} /> in pursuit of best practices, intuitive designs, and compelling groups of three.</div>
        </div>
    );
}

export default about;