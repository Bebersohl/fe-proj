import React from 'react'
import './GraphUnit.css'
import { Popup } from 'semantic-ui-react'

const GraphUnit = ({ color, percent, name }) => (
  <Popup
    trigger={
      <div
        className="GraphUnit"
        style={{ backgroundColor: color, flexGrow: percent }}
      />
    }
    content={name}
    inverted
    size="tiny"
    position="top center"
  />
)

export default GraphUnit
