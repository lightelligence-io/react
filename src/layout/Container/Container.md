## Description

*Container* wraps content in a block and adds default padding around it, as
well as additional responsive-friendly margin on screens wider than 576px.

In general the container occupies the full screen size minus some margin. Only on very large screens the max-width is limited to a maximum of `1248px`. You
can check the behaviour by reducing the screen size and look at the example
below:

```js
import { Container, Card } from '@lightelligence/react';
<Container>
  <Card title="A title of a card">
    Card description
  </Card>
</Container>
```

## Flexible width

By default the *Container* has `max-width` css property which is being set,
this can be overridden by adding `fluid` property to the container. By default this only effects the rendering of the xl breakpoint.

```js
import { Container, Card } from '@lightelligence/react';
<Container fluid>
  <Card title="A title of a card">
    Card description
  </Card>
</Container>
```

## No padding

The default padding of the *Container* can be removed by adding the `noPadding` property. This will only remove the left and the right padding,
making it useful in situations where additional spacing is not needed.

```js
import { Container, Card } from '@lightelligence/react';
<Container noPadding>
  <Card title="A title of a card">
    Card description
  </Card>
</Container>
```
