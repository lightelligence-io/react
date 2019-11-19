## Description

The `BasicCardTable` component is used to show table-like content that is represented as a list of cards on tablet and mobile.

## Static BasicCardTable Example

A simple usage with only one card.

```js
import {
  BasicCardTableBody,
  BasicCardTableTitle,
  BasicCardTable,
  BasicCardTableHead,
  BasicCardTableCardItem,
  BasicCardTableCard,
  BasicCardTableHeadItem,
} from '@lightelligence/react';

<BasicCardTable selectable>
  <BasicCardTableHead>
    <BasicCardTableHeadItem>Name</BasicCardTableHeadItem>
    <BasicCardTableHeadItem>Age</BasicCardTableHeadItem>
    <BasicCardTableHeadItem>Birthday</BasicCardTableHeadItem>
  </BasicCardTableHead>
  <BasicCardTableBody>
    <BasicCardTableCard onClick={() => alert('card clicked')}>
      <BasicCardTableCardItem title="Name">Peter Watson</BasicCardTableCardItem>
      <BasicCardTableCardItem title="Age">25</BasicCardTableCardItem>
      <BasicCardTableCardItem title="Birthday">
        2005/07/03
      </BasicCardTableCardItem>
    </BasicCardTableCard>
  </BasicCardTableBody>
</BasicCardTable>;
```

## Basic Data Cards based on data sources

The following example assembles a `BasicCardTable` component based on the data sources `fields` and `rows`.

```js
import {
  BasicCardTableBody,
  BasicCardTableTitle,
  BasicCardTable,
  BasicCardTableHead,
  BasicCardTableCardItem,
  BasicCardTableCard,
  BasicCardTableHeadItem,
} from '@lightelligence/react';

const fields = [
  { key: 'name', label: 'Name'},
  { key: 'age', label: 'Age'},
  { key: 'birthday', label: 'Birthday'},
];
const rows = [
  {
    id: '1',
    name: 'Peter',
    age: 25,
    birthday: '20.01.1995',
  },
  {
    id: '2',
    name: 'Fleming',
    age: 30,
    birthday: '20.01.1990',
  },
];

<BasicCardTable selectable layout="table">
  <BasicCardTableHead>
    {fields.map(({key, label}) => (
      <BasicCardTableHeadItem key={key}>{label}</BasicCardTableHeadItem>
    ))}
  </BasicCardTableHead>
  <BasicCardTableBody>
    {rows.map((user) => (
      <BasicCardTableCard
        key={user.id}
        onClick={() => alert(`click on user ${user.name}`)}
      >
        <BasicCardTableCardItem title="Name">
          {user.name}
        </BasicCardTableCardItem>
        <BasicCardTableCardItem title="Age">
          {user.age}
        </BasicCardTableCardItem>
        <BasicCardTableCardItem title="Birthday">
          {user.birthday}
        </BasicCardTableCardItem>
      </BasicCardTableCard>
    ))}
  </BasicCardTableBody>
</BasicCardTable>;
```

## Conditional Content

The following example shows conditional card item content by using `tableOnly` and `listOnly`.

```js
import {
  BasicCardTableBody,
  BasicCardTableTitle,
  BasicCardTable,
  BasicCardTableHead,
  BasicCardTableCardItem,
  BasicCardTableCard,
  BasicCardTableHeadItem,
  BasicCardTableContent,
} from '@lightelligence/react';

const fields = [
  { key: 'name', label: 'Name'},
  { key: 'age', label: 'Age'},
  { key: 'birthday', label: 'Birthday'},
];

const rows = [
  {
    id: '1',
    name: 'Peter',
    age: 25,
    birthday: '20.01.1995',
  },
  {
    id: '2',
    name: 'Fleming',
    age: 30,
    birthday: '20.01.1990',
  },
];

<BasicCardTable selectable layout="table">
  <BasicCardTableHead>
    {fields.map(({ key, label }) => (
      <BasicCardTableHeadItem key={key}>{label}</BasicCardTableHeadItem>
    ))}
  </BasicCardTableHead>
  <BasicCardTableBody>
    {rows.map((user) => (
      <BasicCardTableCard
        key={user.id}
        onClick={() => alert(`click on user ${user.name}`)}
      >
        <BasicCardTableCardItem title="Name">
          <BasicCardTableContent>
          {user.name}
          </BasicCardTableContent>
        </BasicCardTableCardItem>
        <BasicCardTableCardItem title="Info">
          <BasicCardTableContent tableOnly>
            {user.age}
          </BasicCardTableContent>
          <BasicCardTableContent listOnly>
            Age {user.age} born on {user.birthday}
          </BasicCardTableContent>
        </BasicCardTableCardItem>
        <BasicCardTableCardItem tableOnly>
          <BasicCardTableContent>
            {user.birthday}
          </BasicCardTableContent>
        </BasicCardTableCardItem>
      </BasicCardTableCard>
    ))}
  </BasicCardTableBody>
</BasicCardTable>;
```


## Alignment Content

The following example shows how to control the vertical and horizontal alignment of item contents by using `align` and `verticalAlign`.

```js
import {
  BasicCardTableBody,
  BasicCardTableTitle,
  BasicCardTable,
  BasicCardTableHead,
  BasicCardTableCardItem,
  BasicCardTableCard,
  BasicCardTableHeadItem,
  BasicCardTableContent,
} from '@lightelligence/react';

const fields = [
  { key: 'name', label: 'Name'},
  { key: 'info', label: 'Info', align: 'center'},
  { key: 'birthday', label: 'Birthday', align: 'right'},
];

const rows = [
  {
    id: '1',
    name: 'Peter',
    info: 'Corporis rerum ducimus qui est est iure qui quibusdam commodi. Saepe repudiandae illum consequuntur eveniet. Dolorem alias ut ut molestias magni et. Voluptatem veritatis ipsum neque similique occaecati voluptatem molestias quis.',
    birthday: '20.01.1995',
  },
  {
    id: '2',
    name: 'Fleming',
    info: 'Laborum deleniti at expedita fugit nulla est molestias. Quisquam enim et et. Sed exercitationem possimus qui laudantium enim ut. Neque vel cupiditate. Ducimus ea necessitatibus.',
    birthday: '20.01.1990',
  },
];

<BasicCardTable selectable layout="table">
  <BasicCardTableHead>
    {fields.map(({ key, label, align = "left" }) => (
      <BasicCardTableHeadItem key={key} align={align}>{label}</BasicCardTableHeadItem>
    ))}
  </BasicCardTableHead>
  <BasicCardTableBody>
    {rows.map((user) => (
      <BasicCardTableCard
        key={user.id}
        onClick={() => alert(`click on user ${user.name}`)}
      >
        <BasicCardTableCardItem title="Name" verticalAlign="top">
          <BasicCardTableContent>
          {user.name}
          </BasicCardTableContent>
        </BasicCardTableCardItem>
        <BasicCardTableCardItem title="Info" align="center">
          <BasicCardTableContent>
            {user.info}
          </BasicCardTableContent>
        </BasicCardTableCardItem>
        <BasicCardTableCardItem title="Birthday" align="right" verticalAlign="bottom">
          <BasicCardTableContent>
            {user.birthday}
          </BasicCardTableContent>
        </BasicCardTableCardItem>
      </BasicCardTableCard>
    ))}
  </BasicCardTableBody>
</BasicCardTable>;
```