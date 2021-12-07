import React, { Component } from "react";
import Chart from "chart.js/auto";

class BarChart extends Component<any, any> {
  node: any;
  chart: any;

  componentDidMount() {
    this.chart = new Chart(this.node, {
      type: "bar",
      data: this.props.data,
      options: this.props.options,
    });
  }

  render() {
    return (
      <canvas
        style={{ width: 800, height: 300 }}
        ref={(node) => (this.node = node)}
      ></canvas>
    );
  }
}

export default BarChart;
