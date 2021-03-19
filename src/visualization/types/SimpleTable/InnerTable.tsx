import React, {FC} from 'react'
import {Table, ComponentSize} from '@influxdata/clockface'
import {SubsetTable} from 'src/visualization/types/SimpleTable'

interface InnerProps {
  table: SubsetTable
}

const InnerTable: FC<InnerProps> = ({table}) => {
  const headers = Object.values(table.cols).map(c => (
    <Table.HeaderCell key={`h${c.name}`}>
      {c.name}
      <label>{c.group ? 'group' : 'no group'}</label>
      <label>{c.fluxDataType}</label>
    </Table.HeaderCell>
  ))
  const rows = Array(table.end - table.start)
    .fill(null)
    .map((_, idx) => {
      const cells = Object.values(table.cols).map(c => (
        <Table.Cell
          key={`h${c.name}:r${idx}`}
          testID={`table-cell ${c.data[idx]}`}
        >
          {c.data[idx]}
        </Table.Cell>
      ))

      return <Table.Row key={`r${idx}`}>{cells}</Table.Row>
    })

  return (
    <Table fontSize={ComponentSize.Small} striped highlight>
      <Table.Header>
        <Table.Row>{headers}</Table.Row>
      </Table.Header>
      <Table.Body>{rows}</Table.Body>
    </Table>
  )
}

export default InnerTable