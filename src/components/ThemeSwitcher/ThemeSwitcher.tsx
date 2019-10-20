import React from 'react';

const themeSwitcher = (props: any) => {
    return <div>
        <button onClick={() => props.setThemeName('light-theme')}>Light theme</button>
        <button onClick={() => props.setThemeName('dark-theme')}>Dark theme</button>
    </div>
}

export default themeSwitcher;