import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const GearTable = () => (
  <Table>
    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
      <TableRow style={{display: 'flex'}}>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
        <TableHeaderColumn>Price</TableHeaderColumn>
        <TableHeaderColumn>Weight</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      <TableRow style={{display: 'flex'}}>
        <TableRowColumn>Tent</TableRowColumn>
        <TableRowColumn>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel odio id nibh volutpat molestie. Etiam congue, arcu condimentum sagittis pulvinar, dolor libero faucibus ligula, sit amet blandit elit eros a neque. Ut eu euismod nulla. Proin nec pulvinar lacus.</TableRowColumn>
        <TableRowColumn>$3.99</TableRowColumn>
        <TableRowColumn>23 g</TableRowColumn>
      </TableRow>
      <TableRow style={{display: 'flex'}}>
        <TableRowColumn>Tent</TableRowColumn>
        <TableRowColumn>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel odio id nibh volutpat molestie. Etiam congue, arcu condimentum sagittis pulvinar, dolor libero faucibus ligula, sit amet blandit elit eros a neque. Ut eu euismod nulla. Proin nec pulvinar lacus.</TableRowColumn>
        <TableRowColumn>$3.99</TableRowColumn>
        <TableRowColumn>23 g</TableRowColumn>
      </TableRow>
      <TableRow style={{display: 'flex'}}>
        <TableRowColumn>Tent</TableRowColumn>
        <TableRowColumn>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel odio id nibh volutpat molestie. Etiam congue, arcu condimentum sagittis pulvinar, dolor libero faucibus ligula, sit amet blandit elit eros a neque. Ut eu euismod nulla. Proin nec pulvinar lacus.</TableRowColumn>
        <TableRowColumn>$3.99</TableRowColumn>
        <TableRowColumn>23 g</TableRowColumn>
      </TableRow>
      <TableRow style={{display: 'flex'}}>
        <TableRowColumn>Tent</TableRowColumn>
        <TableRowColumn>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel odio id nibh volutpat molestie. Etiam congue, arcu condimentum sagittis pulvinar, dolor libero faucibus ligula, sit amet blandit elit eros a neque. Ut eu euismod nulla. Proin nec pulvinar lacus.</TableRowColumn>
        <TableRowColumn>$3.99</TableRowColumn>
        <TableRowColumn>23 g</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
)

export default GearTable