import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import './Toolbar.scss';

const routes: any = {
    '/' : 'About Me',
    '/portfolio' : 'Portfolio',
    '/experience' : 'Experience',
    '/skills' : 'Skills'
}

class Toolbar extends Component<any, any> {
    render() {
        return (
            <header className="Toolbar">
                <button className="CurrentSpace" onClick={this.props.drawerToggleClicked}>{ routes[this.props.location.pathname] }</button>
                <DrawerToggle clicked={this.props.drawerToggleClicked} />
                <ThemeSwitcher {...this.props} />
            </header>
        );
    }
}

export default withRouter(Toolbar);