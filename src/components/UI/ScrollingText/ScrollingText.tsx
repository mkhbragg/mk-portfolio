import React, { Component } from 'react';

import './ScrollingText.scss';

class ScrollingText extends Component<any, any> {
    state = {
        zIndex: 0,
        activeTextId: -1
    }

    // only update component if the active item has changed
    shouldComponentUpdate(nextProps: any, nextState: any) {
        return this.state.activeTextId !== nextState.activeTextId;
    }

    // cycle through each item and set state to index of currently active item
    componentDidUpdate(prevProps: any, prevState: any) {
        setTimeout(() => {
            let newVal = this.state.activeTextId < this.props.items.length - 1 ? (this.state.activeTextId + 1) : (this.state.activeTextId + 1)%(this.props.items.length);
            this.setState({ activeTextId: newVal, zIndex: ++prevState.zIndex });
        }, 2000);
    }

    // initialize activeTextId state to trigger componentDidUpdate()
    componentDidMount() {
        if (this.state.activeTextId < 0) {
            this.setState({ activeTextId: 0 });
        }
    }

    getZIndex = (id: number) => {
        return id === this.state.activeTextId ? this.state.zIndex : 0;
    }

    render () {
        return (
            <span className="ScrollingText">
                {this.props.items.map( (item: any) => (
                    <span key={item.id} style={{ zIndex: this.getZIndex(item.id) }}>{item.label}</span>
                ))}
            </span>
        );
    }
};

export default ScrollingText;