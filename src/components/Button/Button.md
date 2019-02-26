```js
import { Button } from '@lightelligence/react';
<Button>Button</Button>;
```

### Outline

```js
import { Button } from '@lightelligence/react';
<Button outline>Outline</Button>;
```

### States

```js
import { Button } from '@lightelligence/react';
<Button disabled>Disabled</Button>;
```

### Context Colors

```js
import { Button } from '@lightelligence/react';
<>
  <Button color="primary">Button</Button>
  <Button color="secondary">Button</Button>
  <Button color="info">Button</Button>
  <Button color="error">Button</Button>
  <Button color="success">Button</Button>
</>;
```

#### Outline Context Colors

```jsx
import { Button } from '@lightelligence/react';
<>
  <Button color="primary" outline>
    Button
  </Button>
  <Button color="secondary" outline>
    Button
  </Button>
  <Button color="info" outline>
    Button
  </Button>
  <Button color="error" outline>
    Button
  </Button>
  <Button color="success" outline>
    Button
  </Button>
</>;
```

### Selectable

Highlight on focus events

```js
import { Button } from '@lightelligence/react';
<>
  <Button icon="chevron_left" selectable outline color="primary" />
  <Button icon="chevron_right" selectable color="primary" />
</>;
```
