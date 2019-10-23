import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import './Toolbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const routes: any = {
    '/' : 'About Me',
    '/portfolio' : 'Portfolio',
    '/experience' : 'Experience',
    '/skills' : 'Skills',
    '/skills/core': 'Skills: Core',
    '/skills/general': 'Skills: General',
    '/skills/tools': 'Skills: Tools',
}

class Toolbar extends Component<any, any> {
    goToLink(link: string) {
        window.location.href = link;
    }
    render() {
        return (
            <header className="Toolbar">
                <button aria-label="Open navigation" className="CurrentSpace" onClick={this.props.drawerToggleClicked}>{ routes[this.props.location.pathname] }</button>
                <div className="Contact">
                    <button aria-label="My github page" className="Large Icon" onClick={() => this.goToLink('https://github.com/mkhbragg')}><FontAwesomeIcon icon={['fab', 'github']}></FontAwesomeIcon></button>
                    <button aria-label="My linkedin page" className="Large Icon" onClick={() => this.goToLink('https://www.linkedin.com/in/mariah-bragg-582abb91/')}><FontAwesomeIcon icon={['fab', 'linkedin']}></FontAwesomeIcon></button>
                </div>
                <ThemeSwitcher {...this.props} />
            </header>
        );
    }
}

export default withRouter(Toolbar);