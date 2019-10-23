import React, { Component } from 'react';
const Chart = require('chart.js');

class BarChart extends Component<any, any> {
    node: any;
    chart: any;

    componentDidMount() {
        this.chart = new Chart(this.node, {
            type: "bar",
            data: this.props.data,
            options: this.props.options
        });
    }

    render() {
        return (
            <canvas
                style={{ width: 800, height: 300 }}
                ref={node => (this.node = node)}></canvas>
        );
    }
}

export default BarChart;