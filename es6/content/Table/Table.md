#### Basic table component without header

```js
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
const { date } = require('../../utils/date'); // only for demonstration

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
    ({ name, id }) => <React.Fragment>
      <Headline style={{ margin: '0' }} size={6} color='primary'>{name}</Headline>
      <div className="olt-MonoText olt-MonoText--xxSmall">{id}</div>
    </React.Fragment>
  }/>
  <TableCell field="device-type" renderer={
    (row) => (
        <div className="olt-text--line">
          <Icon name="exit_to_app" color="primary"/>
          <span className="olt-MonoText olt-MonoText--xxSmall">Gateway</span>
        </div>
    )
  } />
  <TableCell field="owner" />
  <TableCell field="firmware" className="olt-u-textPrimary"/>
  <TableCell field="tags" renderer={
    ({ tags }) => (
        <Grid>
          {tags.map((tag) => (
            <GridItem key={tag}>
              <Tag>{tag}</Tag>
            </GridItem>
          ))}
        </Grid>
    )} />
  <TableCell field="meta" renderer={
    ({ meta: { lastSeen } }) => (lastSeen)
  } />
  <TableCell field="meta" renderer={
        ({ status }) => <React.Fragment>
          <i className="olt-u-textSuccess">●</i>
          { status }
        </React.Fragment>
      } />
</Table>
```
