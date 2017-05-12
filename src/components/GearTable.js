import React, { Component } from 'react'
import { Table, Segment, Header, Image } from 'semantic-ui-react'
import _ from 'lodash'
import GraphBar from './GraphBar'
import './GearTable.css'

const tableData = [
  {
    name: 'MLD burn',
    qty: 1,
    img: 'http://i.imgur.com/M0ua3NK.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in ante dignissim, maximus turpis id, scelerisque est. Suspendisse et erat sed leo laoreet volutpat sed quis lorem.',
    weight: 6,
    price: 23.00,
  },
  {
    name: 'Tarp',
    qty: 4,
    img: 'http://i.imgur.com/M0ua3NK.jpg',
    description: '',
    weight: 100,
    price: 55.00,
  },
  {
    name: 'Sleeping Bag',
    qty: 2,
    img: 'http://i.imgur.com/M0ua3NK.jpg',
    description: 'This is really good',
    weight: 27,
    price: 34.00,
  },
  {
    name: 'NeoAir Xlite',
    qty: 7,
    img: 'http://i.imgur.com/M0ua3NK.jpg',
    description: 'Its OK',
    weight: 23,
    price: 53.00,
  },
]

class GearTable extends Component {
  state = {
    column: null,
    direction: null,
    data: tableData,
    totalWeight: 1,
    columns: {
      name: true,
      qty: true,
      img: false,
      description: true,
      weight: true,
      price: true,
    },
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
    const { column, direction, data, columns } = this.state
    return (
      <div className="GearTable">
        <Segment color="red" attached="top">
          <Header as="h3">
            Big 3
          </Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar porta augue, fringilla euismod diam. Aliquam augue sem, porttitor vel placerat sed, euismod vel lorem. Suspendisse sed neque ex. Praesent gravida, quam ut accumsan rutrum, justo urna mollis nibh, sit amet rutrum ipsum dolor non lectus. Aliquam eget nunc dui. Donec eget sagittis lectus, eu tincidunt ipsum. Nullam sit amet lacus nibh. Curabitur sodales non libero cursus ornare.
          </p>
        </Segment>
        <GraphBar data={data} />
        <Segment className="GearTable--Segment" attached="bottom">
          <Table sortable basic="very">
            <Table.Header>
              <Table.Row>
                {columns.qty &&
                  <Table.HeaderCell
                    sorted={column === 'qty' ? direction : undefined}
                    onClick={this.handleSort('qty')}
                  >
                    Qty
                  </Table.HeaderCell>}
                {columns.name &&
                  <Table.HeaderCell
                    sorted={column === 'name' ? direction : undefined}
                    onClick={this.handleSort('name')}
                  >
                    Name
                  </Table.HeaderCell>}
                {columns.img &&
                  <Table.HeaderCell
                    sorted={column === 'img' ? direction : undefined}
                    onClick={this.handleSort('img')}
                  >
                    Image
                  </Table.HeaderCell>}
                {columns.description &&
                  <Table.HeaderCell
                    sorted={column === 'description' ? direction : undefined}
                    onClick={this.handleSort('description')}
                  >
                    Description
                  </Table.HeaderCell>}
                {columns.price &&
                  <Table.HeaderCell
                    sorted={column === 'price' ? direction : undefined}
                    onClick={this.handleSort('price')}
                  >
                    Price
                  </Table.HeaderCell>}
                {columns.weight &&
                  <Table.HeaderCell
                    sorted={column === 'weight' ? direction : undefined}
                    onClick={this.handleSort('weight')}
                  >
                    Weight
                  </Table.HeaderCell>}
              </Table.Row>
            </Table.Header>

            <Table.Body>

              {data.map(
                ({ name, qty, img, description, price, weight }, index) => (
                  <Table.Row key={index}>
                    {columns.qty && <Table.Cell>{qty}</Table.Cell>}
                    {columns.name && <Table.Cell>{name}</Table.Cell>}
                    {columns.img &&
                      <Table.Cell><Image src={img} size="small" /></Table.Cell>}
                    {columns.description &&
                      <Table.Cell>{description}</Table.Cell>}
                    {columns.price &&
                      <Table.Cell>$<span>{price}</span></Table.Cell>}
                    {columns.weight &&
                      <Table.Cell><span>{weight}</span>g</Table.Cell>}
                  </Table.Row>
                )
              )}

            </Table.Body>
          </Table>
        </Segment>
      </div>
    )
  }
}

export default GearTable
