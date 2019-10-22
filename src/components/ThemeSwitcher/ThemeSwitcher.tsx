import React from 'react';

import './ThemeSwitcher.scss';

const themeSwitcher = (props: any) => {
    return (
        <div className="ThemeSwitcher">
            <button
                onClick={() => props.setThemeName('light-theme')}
                className={props.themeName === 'light-theme' ? 'active' : ''}>Light</button>
            <button
                onClick={() => props.setThemeName('dark-theme')}
                className={props.themeName === 'dark-theme' ? 'active' : ''}>Dark</button>
        </div>
    );
}

export default themeSwitcher;