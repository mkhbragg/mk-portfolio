import React, { Component } from 'react'

import '../../App.scss'
import NavigationItem from './NavigationItem/NavigationItem'

class Navigation extends Component<any, any> {
  render() {
    return (
      <nav>
        <ul>
          <NavigationItem link="/" exact label="About Me"></NavigationItem>
          <NavigationItem link="/skills" label="Skills"></NavigationItem>
          <NavigationItem
            link="/experience"
            exact
            label="Experience"
          ></NavigationItem>
          <NavigationItem
            link="/portfolio"
            exact
            label="Portfolio"
          ></NavigationItem>
        </ul>
      </nav>
    )
  }
}

export default Navigation
