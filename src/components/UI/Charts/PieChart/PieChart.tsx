import React, { Component } from 'react'
const Chart = require('chart.js')

class PieChart extends Component<any, any> {
  node: any
  chart: any

  componentDidMount() {
    this.chart = new Chart(this.node, {
      type: 'doughnut',
      data: this.props.data,
      options: this.props.options,
    })
  }

  render() {
    return (
      <div
        style={{
          position: 'relative',
          width: '80vw',
          margin: 'auto',
          maxWidth: '400px',
          minHeight: '200px',
        }}
      >
        <canvas ref={(node) => (this.node = node)}></canvas>
      </div>
    )
  }
}

export default PieChart
