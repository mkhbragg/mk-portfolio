import React from 'react';

import './ThemeSwitcher.scss';

const themeSwitcher = (props: any) => {
    return (
        <div className="ThemeSwitcher">
            <button aria-label="Light theme"
                onClick={() => props.setThemeName('light-theme')}
                className={props.themeName === 'light-theme' ? 'active' : ''}>Light</button>
            <button aria-label="Dark theme"
                onClick={() => props.setThemeName('dark-theme')}
                className={props.themeName === 'dark-theme' ? 'active' : ''}>Dark</button>
        </div>
    );
}

export default themeSwitcher;