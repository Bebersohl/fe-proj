import React, { Component } from 'react'
import { Table, Segment, Header, Image } from 'semantic-ui-react'
import './GraphBar.css'
import GraphUnit from './GraphUnit'

class GraphBar extends Component {
  state = {}

  render() {
    const count = this.props.data.length
    const step = 0.75 / count

    return (
      <Segment className="GraphBar" attached>
        {this.props.data.map(
          ({ name, qty, img, description, price, weight }, index) => {
            const color = `rgba(219, 40, 40, ${1 - step * index})`
            return (
              <GraphUnit
                key={index}
                color={color}
                percent={weight / 100}
                name={name}
              />
            )
          }
        )}
      </Segment>
    )
  }
}

export default GraphBar
