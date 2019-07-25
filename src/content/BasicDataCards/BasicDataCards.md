## Description 

The `BasicDataCards` component is used to show table-like content that is represented as a list of cards on tablet and mobile.

## Static BasicDataCards Example

A simple usage with only one card.

```js
import {
  BasicDataCardsBody,
  BasicDataCardsTitle,
  BasicDataCards,
  BasicDataCardsHead,
  BasicDataCardsCardItem,
  BasicDataCardsCard,
  BasicDataCardsHeadItem,
} from '@lightelligence/react';

<BasicDataCards selectable>
  <BasicDataCardsHead>
    <BasicDataCardsHeadItem>Name</BasicDataCardsHeadItem>
    <BasicDataCardsHeadItem>Age</BasicDataCardsHeadItem>
    <BasicDataCardsHeadItem>Birthday</BasicDataCardsHeadItem>
  </BasicDataCardsHead>
  <BasicDataCardsBody>
    <BasicDataCardsCard onClick={() => alert('card clicked')}>
      <BasicDataCardsCardItem title="Name">Peter Watson</BasicDataCardsCardItem>
      <BasicDataCardsCardItem title="Age">25</BasicDataCardsCardItem>
      <BasicDataCardsCardItem title="Birthday">
        2005/07/03
      </BasicDataCardsCardItem>
    </BasicDataCardsCard>
  </BasicDataCardsBody>
</BasicDataCards>;
```

## Basic Data Cards based on data sources

The following example assembles a `BasicDataCards` component based on the data sources `fields` and `rows`.

```js
import {
  BasicDataCardsBody,
  BasicDataCardsTitle,
  BasicDataCards,
  BasicDataCardsHead,
  BasicDataCardsCardItem,
  BasicDataCardsCard,
  BasicDataCardsHeadItem,
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

<BasicDataCards selectable layout="table">
  <BasicDataCardsHead>
    {fields.map(({key, label}) => (
      <BasicDataCardsHeadItem key={key}>{label}</BasicDataCardsHeadItem>
    ))}
  </BasicDataCardsHead>
  <BasicDataCardsBody>
    {rows.map((user) => (
      <BasicDataCardsCard
        key={user.id}
        onClick={() => alert(`click on user ${user.name}`)}
      >
        <BasicDataCardsCardItem title="Name">
          {user.name}
        </BasicDataCardsCardItem>
        <BasicDataCardsCardItem title="Age">
          {user.age}
        </BasicDataCardsCardItem>
        <BasicDataCardsCardItem title="Birthday">
          {user.birthday}
        </BasicDataCardsCardItem>
      </BasicDataCardsCard>
    ))}
  </BasicDataCardsBody>
</BasicDataCards>;
```

## Conditional Content 

The following example shows conditional card item content by using `tableOnly` and `listOnly`.

```js
import {
  BasicDataCardsBody,
  BasicDataCardsTitle,
  BasicDataCards,
  BasicDataCardsHead,
  BasicDataCardsCardItem,
  BasicDataCardsCard,
  BasicDataCardsHeadItem,
  BasicDataCardsContent,
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

<BasicDataCards selectable layout="table">
  <BasicDataCardsHead>
    {fields.map(({ key, label }) => (
      <BasicDataCardsHeadItem key={key}>{label}</BasicDataCardsHeadItem>
    ))}
  </BasicDataCardsHead>
  <BasicDataCardsBody>
    {rows.map((user) => (
      <BasicDataCardsCard
        key={user.id}
        onClick={() => alert(`click on user ${user.name}`)}
      >
        <BasicDataCardsCardItem title="Name">
          <BasicDataCardsContent>
          {user.name}
          </BasicDataCardsContent>
        </BasicDataCardsCardItem>
        <BasicDataCardsCardItem title="Info">
          <BasicDataCardsContent tableOnly>
            {user.age}
          </BasicDataCardsContent>
          <BasicDataCardsContent listOnly>
            Age {user.age} born on {user.birthday}
          </BasicDataCardsContent>
        </BasicDataCardsCardItem>
        <BasicDataCardsCardItem tableOnly>
          <BasicDataCardsContent>
            {user.birthday}
          </BasicDataCardsContent>
        </BasicDataCardsCardItem>
      </BasicDataCardsCard>
    ))}
  </BasicDataCardsBody>
</BasicDataCards>;
```


## Alignment Content 

The following example shows how to control the vertical and horizontal alignment of item contents by using `align` and `verticalAlign`.

```js
import {
  BasicDataCardsBody,
  BasicDataCardsTitle,
  BasicDataCards,
  BasicDataCardsHead,
  BasicDataCardsCardItem,
  BasicDataCardsCard,
  BasicDataCardsHeadItem,
  BasicDataCardsContent,
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

<BasicDataCards selectable layout="table">
  <BasicDataCardsHead>
    {fields.map(({ key, label, align = "left" }) => (
      <BasicDataCardsHeadItem key={key} align={align}>{label}</BasicDataCardsHeadItem>
    ))}
  </BasicDataCardsHead>
  <BasicDataCardsBody>
    {rows.map((user) => (
      <BasicDataCardsCard
        key={user.id}
        onClick={() => alert(`click on user ${user.name}`)}
      >
        <BasicDataCardsCardItem title="Name" verticalAlign="top">
          <BasicDataCardsContent>
          {user.name}
          </BasicDataCardsContent>
        </BasicDataCardsCardItem>
        <BasicDataCardsCardItem title="Info" align="center">
          <BasicDataCardsContent>
            {user.info}
          </BasicDataCardsContent>
        </BasicDataCardsCardItem>
        <BasicDataCardsCardItem title="Birthday" align="right" verticalAlign="bottom">
          <BasicDataCardsContent>
            {user.birthday}
          </BasicDataCardsContent>
        </BasicDataCardsCardItem>
      </BasicDataCardsCard>
    ))}
  </BasicDataCardsBody>
</BasicDataCards>;
```