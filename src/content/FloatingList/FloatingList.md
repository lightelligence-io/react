## Description

The Floating List renders a list of element, that automatically align to your flex start (unless specified otherwise).

```js
import {
	FloatingList,
	Chip,
} from '@lightelligence/react';


<FloatingList style={{border: "1px solid #ddd", width: "220px"}}>
  <Chip>Tag A</Chip>
  <Chip>Tag B</Chip>
  <Chip>Tag C</Chip>
  <Chip>Tag D</Chip>
</FloatingList>
```

## Cutomizing the gap between items

By default a small gap is placed between elements horizontally and vertically. This can be customized with values between 0 (no gap) and 8 (large gap).

```js
import {
	FloatingList,
	Chip,
} from '@lightelligence/react';


<FloatingList gap={3} style={{border: "1px solid #ddd", width: "220px"}}>
  <Chip>Tag A</Chip>
  <Chip>Tag B</Chip>
  <Chip>Tag C</Chip>
  <Chip>Tag D</Chip>
</FloatingList>
```

## Justify the items to the end

Normally all items are aligned to the left or in flex box terms justified to the start. Use `justifyEnd` to align them to the right.

```js
import {
	FloatingList,
	Chip,
} from '@lightelligence/react';


<FloatingList justifyEnd gap={3} style={{border: "1px solid #ddd", width: "220px"}}>
  <Chip>Tag A</Chip>
  <Chip>Tag B</Chip>
  <Chip>Tag C</Chip>
  <Chip>Tag D</Chip>
</FloatingList>
```