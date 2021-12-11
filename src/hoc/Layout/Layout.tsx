import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Layout.scss'
import Navigation from '../../components/Navigation/Navigation'
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'

class Layout extends Component<any, any> {
  public static propTypes = {}
  state = {
    showSideDrawer: false,
    fixedNav: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event: any) => {
    let scrollTop = document.getElementsByTagName('html')[0].scrollTop
    if (scrollTop >= 40) {
      this.setState({ fixedNav: true })
    } else {
      this.setState({ fixedNav: false })
    }
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState: any) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render() {
    const navClasses = this.state.fixedNav ? ['BigNav', 'fixed'] : ['BigNav']
    return (
      <div className="Content">
        <Toolbar
          {...this.props}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <div className={navClasses.join(' ')}>
          <Navigation />
        </div>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className="Main">
          {/* <div className="Navigation">
                        <Navigation></Navigation>
                    </div> */}
          {this.props.children}
        </main>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
