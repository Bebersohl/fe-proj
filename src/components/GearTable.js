import React, { Component } from 'react'
import { Table, Segment, Header } from 'semantic-ui-react'
import _ from 'lodash'

const tableData = [
  {
    name: 'MLD burn',
    qty: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in ante dignissim, maximus turpis id, scelerisque est. Suspendisse et erat sed leo laoreet volutpat sed quis lorem.',
    weight: 6,
  },
  { name: 'Tarp', qty: 4, description: '', weight: 533 },
  {
    name: 'Sleeping Bag',
    qty: 2,
    description: 'This is really good',
    weight: 27,
  },
  { name: 'NeoAir Xlite', qty: 7, description: 'Its OK', weight: 23 },
]

class GearTable extends Component {
  state = {
    column: null,
    direction: null,
    data: tableData,
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, direction, data } = this.state
    return (
      <div>
        <Header as="h2" attached="top">
          Attached Header
        </Header>
        <Table sortable attached="top">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'qty' && direction}
                onClick={this.handleSort('qty')}
              >
                Qty
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'name' && direction}
                onClick={this.handleSort('name')}
              >
                Name
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'description' && direction}
                onClick={this.handleSort('description')}
              >
                Description
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'weight' && direction}
                onClick={this.handleSort('weight')}
              >
                Weight
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>

            {data.map(({ name, qty, description, weight }) => (
              <Table.Row>
                <Table.Cell>{qty}</Table.Cell>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
                <Table.Cell>{weight}</Table.Cell>
              </Table.Row>
            ))}

          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default GearTable
