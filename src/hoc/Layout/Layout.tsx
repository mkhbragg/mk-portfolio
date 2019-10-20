import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Layout.scss';
import Navigation from '../../components/Navigation/Navigation';
import Toolbar from '../../components/Toolbar/Toolbar';
// import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component<any, any> {
    public static propTypes = {};
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState: any ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render () {
        return (
            <div className="Content">
                <Toolbar {...this.props}></Toolbar>
                <div>Side Drawer</div>
                <Navigation></Navigation>
                {/* <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} /> */}
                {/* <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} /> */}
                <main className="Main">
                    {this.props.children}
                </main>
            </div>
        );
    };
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;