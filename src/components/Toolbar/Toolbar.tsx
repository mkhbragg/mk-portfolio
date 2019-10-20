import React from 'react';

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const toolbar = (props: any) => {
    return (
        <div><ThemeSwitcher {...props} /></div>
    );
}

export default toolbar;