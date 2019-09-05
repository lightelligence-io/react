*Grid* is our main layout component, which can be used to create responsive
grid layouts of your application.

*Grid* implements typical 12-columns based grid by using
[Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

*Grid* has nested children of type *GridItem* inside.



```js
import { V2Grid, V2GridItem, Card } from '@lightelligence/react';
<div>
  <V2Grid>
    <V2GridItem size={{ xs: 12, sm: 6, lg: 4 }}>
      <Card color="primary">
        Responsive
      </Card>
    </V2GridItem>
    <V2GridItem size={{ xs: 12, sm: 6, lg: 4 }}>
      <Card>
        Responsive
      </Card>
    </V2GridItem>
    <V2GridItem size={{ xs: 12, sm: 6, lg: 4 }}>
      <Card>
        Offset
      </Card>
    </V2GridItem>
    <V2GridItem size="auto">
      <Card color="primary">
        Auto Width
      </Card>
    </V2GridItem>
    <V2GridItem size="auto">
      <Card>
        Auto width
      </Card>
    </V2GridItem>
    <V2GridItem size="auto">
      <Card>
        Auto width
      </Card>
    </V2GridItem>
  </V2Grid>
</div>
```

## Breakpoints

The Grid can be customized on a per breakpoint basis. The following breakpoints are available:

|            | Extra small |  Small | Medium |  Large | Extra large |
|-----------:|:-----------:|:------:|:------:|:------:|:-----------:|
| Breakpoint |    <576px   | ≥576px | ≥768px | ≥992px |   ≥1200px   |
|        Key |      xs     |   sm   |   md   |   lg   |      xl     |


## Fixed size columns

You can specify the column size of each item via `size` property. The
`GridItem` elements together must add up to *12* and can be different for each
column. 

```js
import { V2Grid, V2GridItem, Card } from '@lightelligence/react';
<V2Grid>
  <V2GridItem size={2}>
    <Card><pre>item--1</pre></Card>
  </V2GridItem>
  <V2GridItem size={3}>
    <Card><pre>item--2</pre></Card>
  </V2GridItem>
  <V2GridItem size={4}>
    <Card><pre>item--3</pre></Card>
  </V2GridItem>
  <V2GridItem size={3}>
    <Card><pre>item--4</pre></Card>
  </V2GridItem>
</V2Grid>
```

by setting `size` to `auto`, your columns get a flexible width, based
on their content.

```js
import { V2Grid, V2GridItem, Card } from '@lightelligence/react';
<V2Grid>
  <V2GridItem size="auto">
    <Card><pre>item--1</pre></Card>
  </V2GridItem>
  <V2GridItem size="auto">
    <Card><pre>item--2</pre></Card>
  </V2GridItem>
  <V2GridItem size="auto">
    <Card><pre>item--3</pre></Card>
  </V2GridItem>
  <V2GridItem size="auto">
    <Card><pre>item--4</pre></Card>
  </V2GridItem>
</V2Grid>
```

The `size` of a column can be specified separately for each breakpoint by passing an object to `size`. The breakpoint names are the keys in this object.

```js
import { V2Grid, V2GridItem, Card } from '@lightelligence/react';
<V2Grid>
  <V2GridItem size={{ sm: 12, md: 6, lg: 3}}>
    <Card><pre>item--1</pre></Card>
  </V2GridItem>
  <V2GridItem size={{ sm: 12, md: 6, lg: 3}}>
    <Card><pre>item--2</pre></Card>
  </V2GridItem>
  <V2GridItem size={{ sm: 12, md: 6, lg: 3}}>
    <Card><pre>item--2</pre></Card>
  </V2GridItem>
  <V2GridItem size={{ sm: 12, md: 6, lg: 3}}>
    <Card><pre>item--2</pre></Card>
  </V2GridItem>
</V2Grid>
```
## Offsets

You can use the `offset` property to specify if a column should take
pre-defined space before being rendered.

```js
import { V2Grid, V2GridItem, Card } from '@lightelligence/react';
<V2Grid>
  <V2GridItem offset={4} size={4}>
    <Card><pre>item--1</pre></Card>
  </V2GridItem>
  <V2GridItem offset={4} size={4}>
    <Card><pre>item--2</pre></Card>
  </V2GridItem>
</V2Grid>
```

The `offset` of a column can be specified separately for each breakpoint by passing an object as `size`. The breakpoint names are the keys in this object.

```js
import { V2Grid, V2GridItem, Card } from '@lightelligence/react';
<V2Grid>
  <V2GridItem offset={{ sm: 1, md: 2, lg: 4}} size={{ sm: 10, md: 8, lg: 4}}>
    <Card><pre>item--1</pre></Card>
  </V2GridItem>
  <V2GridItem offset={{ sm: 1, md: 2, lg: 4}} size={{ sm: 10, md: 8, lg: 4}}>
    <Card><pre>item--2</pre></Card>
  </V2GridItem>
</V2Grid>
```