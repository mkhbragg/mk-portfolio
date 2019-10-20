import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Navigation.module.scss';
import '../../App.scss';
import NavigationItem from './NavigationItem/NavigationItem';

class Navigation extends Component<any, any> {

    render() {
        return (
            <nav className={styles.Navigation}>
                <ul>
                    <NavigationItem link="/" exact>About Me</NavigationItem>
                    <NavigationItem link="/skills" exact>Skills</NavigationItem>
                    <NavigationItem link="/experience" exact>Experience</NavigationItem>
                    <NavigationItem link="/portfolio" exact>Portfolio</NavigationItem>
                </ul>
            </nav>
        );
    }
}

export default Navigation;