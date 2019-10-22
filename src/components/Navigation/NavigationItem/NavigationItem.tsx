import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

import './NavigationItem.scss';

// TODO: replace any types with specific proptypes
class NavigationItem extends Component<any, any> {
    public static propTypes = {};

    state = {
        ripple: false,
        rippleStyle: {
            top: 0,
            left: 0
        }
    }

    handleRipple = (route: string, x: any, y: any) => {
        // set ripple position and turn it on
        this.setState({ ripple: true, rippleStyle: { top: y, left: x } });
    
        // remove ripple after 2s
        setTimeout(() => {
            this.setState({ ripple: false });
        }, 2000);

        // accessibility: if the button was triggered without clicking the NavLink, we still want to navigate to the correct path
        this.props.history.push(route);
    }

    render() {
        return (
            <li className="NavigationItem">
            <button
                onClick={(e) => this.handleRipple(this.props.link, e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
                aria-label="test">
                <NavLink to={this.props.link} exact={this.props.exact}>
                    { this.state.ripple ? <div className="RippleEffect" style={this.state.rippleStyle}></div> : null }
                    {this.props.children}
                </NavLink>
                </button>
            </li>
        );
    }
}

NavigationItem.propTypes = {
    exact:     PropTypes.bool,
    children:   PropTypes.node.isRequired,
    link:       PropTypes.string.isRequired
};

export default withRouter(NavigationItem);