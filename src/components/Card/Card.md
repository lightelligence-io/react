## Description

The Card is used as a key element to group content and components.

It supports several elements like title, description, actions, etc that can be passed as properties for a unified layout.

Cards can also be used as buttons or edit cards as described below.

## Card with headline

```js
import { Card } from '@lightelligence/react';
<Card title="Text">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```


## Card with headline and subtitle.

```js
import { Card } from '@lightelligence/react';
<Card
  title="Text"
  description="This is a very descriptive text"
>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```

## Card with action item

```js
import { Card, Icon } from '@lightelligence/react';
<Card
  title="Card with action"
  description="This is a very descriptive text"
  action={(
    <Icon onClick={() => alert('click')} name="ellipsis"/>
  )}
>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```

## Card with headline and action item only.

```js
import { Card, Button } from '@lightelligence/react';
<Card
  title="Hello World"
  description="This is a very descriptive text"
  action={(
    <Button onClick={() => {
      console.log('click');
    }}>
      Submit
    </Button>
  )}
/>
```


## Card with content only.

```js
import { Card } from '@lightelligence/react';
<Card>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```


## Card as Button

```js
import { Card, Icon } from '@lightelligence/react';
<Card
  title="Click here"
  description="...to use a card like a button"
  selectable
  action={<Icon className="olt-Card-icon" name="ellipsis"/>}
  onClick={() => {
    console.log('click');
  }}/>
```

## Card as Links

```js
import { Card, Link, Icon } from '@lightelligence/react';
<Link to="https://google.com" target="_blank">
  <Card
    title="Title"
    description="Description"
    selectable
    action={(
      <Icon name="ellipsis"/>
    )}
  >
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </Card>
</Link>
```


## Context Cards

```js
import { Card } from '@lightelligence/react';
<Card
  color="primary"
  title="Primary"
>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```

```js
import { Card } from '@lightelligence/react';
<Card
  color="secondary"
  title="Secondary"
>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```

## Card with teaser image

```js
import { Card } from '@lightelligence/react';
<Card
  title="Teaser"
  image="https://picsum.photos/1160/600?image=1"
>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```

## Disabled Card

```js
import { Card } from '@lightelligence/react';
<Card disabled>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```

## Edit Card

```js
import { Card } from '@lightelligence/react';
<Card edit onEdit={() => alert('Enabling Editing')}>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```
