#### Basic table component without header

```js
import { Table, TableCell } from '@lightelligence/react';
initialState = {
  rows: [
    {firstname: 'Frank', lastname: 'Obenauf', age: 64},
    {firstname: 'Lit', lastname: 'Auflauf', age: 23},
  ]
};
<Table
  rows={state.rows}
>
  <TableCell field="firstname" />
  <TableCell field="lastname" />
  <TableCell field="age" />
</Table>
```

#### With basic header, and two types of cells
```js
import { Table, TableHead, TableCell, TableCellRowIndex } from '@lightelligence/react';
initialState = {
  headerLabels: ['#', 'Firstname', 'Lastname', 'Age'],
  rows: [
    {firstname: 'Frank', lastname: 'Obenauf', age: 64},
    {firstname: 'Lit', lastname: 'Auflauf', age: 23},
    {firstname: 'Meni', lastname: 'Dirkler', age: 53},
    {firstname: 'Habernicht', lastname: 'Sucher', age: 122},
  ]
};
<Table
  header={<TableHead labels={state.headerLabels}/>}
  rows={state.rows}
>
  <TableCellRowIndex />
  <TableCell field="firstname" />
  <TableCell field="lastname" />
  <TableCell field="age" />
</Table>
```


#### Complex example with flexible design cells, Devices
```js
import {
  Table,
  TableHead,
  TableCell,
  TableCellRowIndex,
  Headline,
  Icon,
  Chip,
  GridItem,
  Grid
} from '@lightelligence/react';
import { date } from '../../utils/date'; // only for demonstration

initialState = {
  headerLabels: ['Name/ID', 'Type', 'Model', 'Firmware', 'Tags', 'Date', 'Status'],
  rows: [
    {
      id: '12345678900',
      name: 'Gateway North 1',
      type: {
        name: 'gateway',
      },
      owner: 'Osram',
      firmware: 'AF21',
      tags: ['a', 'b'],
      meta: {
        lastSeen: '2018-10-25T14:03:28.952Z'
      },
      status: 'online'
    },
  ]
};
<Table
  header={<TableHead labels={state.headerLabels}/>}
  rows={state.rows}
>
  <TableCell field="headline" renderer={
    ({ name, id }) => <>
      <Headline style={{ margin: '0' }} size={6} color='primary'>{name}</Headline>
      <div className="olt-MonoText olt-MonoText--xxSmall">{id}</div>
    </>
  }/>
  <TableCell field="device-type" renderer={
    (row) => (
        <div className="olt-text--line">
          <Icon name="external" color="primary"/>
          <span className="olt-MonoText olt-MonoText--xxSmall">Gateway</span>
        </div>
    )
  } />
  <TableCell field="owner" />
  <TableCell field="firmware" className="olt-u-colorPrimary"/>
  <TableCell field="tags" renderer={
    ({ tags }) => (
        <Grid>
          {tags.map((tag) => (
            <GridItem key={tag}>
              <Chip>{tag}</Chip>
            </GridItem>
          ))}
        </Grid>
    )} />
  <TableCell field="meta" renderer={
    ({ meta: { lastSeen } }) => (lastSeen)
  } />
  <TableCell field="meta" renderer={
        ({ status }) => <>
          <i className="olt-u-colorSuccess">●</i>
          { status }
        </>
      } />
</Table>
```
