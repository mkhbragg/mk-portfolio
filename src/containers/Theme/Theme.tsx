import React from 'react';

const theme = (props: any) => {
    return (
        <div className={props.themeName}>{props.children}</div>
    );
}

export default theme;