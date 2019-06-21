### Sizes

```js
import { Tooltip, Button, Card } from '@lightelligence/react';
<>
  <Tooltip message="Tooltip">
    <Button color="primary" className="Button--primary">
      Tooltip
    </Button>
  </Tooltip>

  <Tooltip
    wide
    message="Lorem Ipsum Dolor sit amet consteur il amet dos el 123"
  >
    <Button color="primary">Wide Tooltip</Button>
  </Tooltip>
</>;
```

### Positions

```js
import { Tooltip, Button, Card } from '@lightelligence/react';
<>
  <Tooltip message="Tooltip">
    <Button color="primary" className="Button--primary">
      Tooltip Top
    </Button>
  </Tooltip>

  <Tooltip bottom message="Tooltip">
    <Button color="primary" className="Button--primary">
      Tooltip Bottom
    </Button>
  </Tooltip>
</>;
```

### Context Colors

```js
import { Tooltip, Button } from '@lightelligence/react';
<>
  <Tooltip color="primary" message="Tooltip">
    <Button color="primary" className="Button--primary">
      Primary
    </Button>
  </Tooltip>

  <Tooltip color="secondary" message="Tooltip">
    <Button color="secondary" className="Button--secondary">
      Secondary
    </Button>
  </Tooltip>

  <Tooltip color="info" message="Tooltip">
    <Button color="info" className="Button--info">
      Info
    </Button>
  </Tooltip>

  <Tooltip color="error" message="Tooltip">
    <Button color="error" className="Button--error">
      Error
    </Button>
  </Tooltip>

  <Tooltip color="success" message="Tooltip">
    <Button color="success" className="Button--success">
      Success
    </Button>
  </Tooltip>
</>;
```

### Other trigger components

```js
import { Tooltip, Button, Card } from '@lightelligence/react';

<Tooltip wide message="This is a long tooltip on a card.">
  <Card>Cards! Cards! Cards!</Card>
</Tooltip>
```
