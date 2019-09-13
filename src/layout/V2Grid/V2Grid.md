*Grid* is our main layout component, which can be used to create responsive
grid layouts of your application.

*Grid* implements typical 12-columns based grid by using
[Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

*Grid* has nested children of type *GridItem* inside.



```js
import { V2Grid, V2GridItem, Card } from '@lightelligence/react';
<div>
  <V2Grid>
    <V2GridItem xs={12} sm={6} lg={4}>
      <Card color="primary">
        Responsive
      </Card>
    </V2GridItem>
    <V2GridItem xs={12} sm={6} lg={4}>
      <Card>
        Responsive
      </Card>
    </V2GridItem>
    <V2GridItem xs={12} sm={6} lg={4}>
      <Card>
        Offset
      </Card>
    </V2GridItem>
    <V2GridItem xs="auto">
      <Card color="primary">
        Auto Width
      </Card>
    </V2GridItem>
    <V2GridItem xs="auto">
      <Card>
        Auto width
      </Card>
    </V2GridItem>
    <V2GridItem xs="auto">
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

You can specify the column size of each item via `xs` property. The
`GridItem` elements together must add up to *12* and can be different for each
column. 

```js
import { V2Grid, V2GridItem, Card } from '@lightelligence/react';
<V2Grid>
  <V2GridItem xs={2}>
    <Card><pre>item--1</pre></Card>
  </V2GridItem>
  <V2GridItem xs={3}>
    <Card><pre>item--2</pre></Card>
  </V2GridItem>
  <V2GridItem xs={4}>
    <Card><pre>item--3</pre></Card>
  </V2GridItem>
  <V2GridItem xs={3}>
    <Card><pre>item--4</pre></Card>
  </V2GridItem>
</V2Grid>
```

by setting `xs` to `auto`, your columns get a flexible width, based
on their content.

```js
import { V2Grid, V2GridItem, Card } from '@lightelligence/react';
<V2Grid>
  <V2GridItem xs="auto">
    <Card><pre>item--1</pre></Card>
  </V2GridItem>
  <V2GridItem xs="auto">
    <Card><pre>item--2</pre></Card>
  </V2GridItem>
  <V2GridItem xs="auto">
    <Card><pre>item--3</pre></Card>
  </V2GridItem>
  <V2GridItem xs="auto">
    <Card><pre>item--4</pre></Card>
  </V2GridItem>
</V2Grid>
```

The size of a column can be specified separately for each breakpoint by setting one or multiple of the following properties:

- `xs`
- `sm`
- `md`
- `lg`
- `xl`

```js
import { V2Grid, V2GridItem, Card } from '@lightelligence/react';
<V2Grid>
  <V2GridItem sm={12} md={6} lg={3}>
    <Card><pre>item--1</pre></Card>
  </V2GridItem>
  <V2GridItem sm={12} md={6} lg={3}>
    <Card><pre>item--2</pre></Card>
  </V2GridItem>
  <V2GridItem sm={12} md={6} lg={3}>
    <Card><pre>item--2</pre></Card>
  </V2GridItem>
  <V2GridItem sm={12} md={6} lg={3}>
    <Card><pre>item--2</pre></Card>
  </V2GridItem>
</V2Grid>
```
## Offsets

You can use the `offset...` properties to specify if a column should take
pre-defined space before being rendered.

```js
import { V2Grid, V2GridItem, Card } from '@lightelligence/react';
<V2Grid>
  <V2GridItem offsetXs={4} xs={4}>
    <Card><pre>item--1</pre></Card>
  </V2GridItem>
  <V2GridItem offsetXs={4} xs={4}>
    <Card><pre>item--2</pre></Card>
  </V2GridItem>
</V2Grid>
```

The offset of a column can be specified separately for each breakpoint by using the following properties:

- `offsetXs`
- `offsetSm`
- `offsetMd`
- `offsetLg`
- `offsetXl`

```js
import { V2Grid, V2GridItem, Card } from '@lightelligence/react';
<V2Grid>
  <V2GridItem offsetSm={1} offsetMd={2} offsetLg={4} sm={10} md={8} lg={4}>
    <Card><pre>item--1</pre></Card>
  </V2GridItem>
  <V2GridItem offsetSm={1} offsetMd={2} offsetLg={4} sm={10} md={8} lg={4}>
    <Card><pre>item--2</pre></Card>
  </V2GridItem>
</V2Grid>
```