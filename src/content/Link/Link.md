## Description

Simple Textlink

```js
import { Link } from '@lightelligence/react';
<Link target="_blank" to="https://lightelligence.io">Read Tutorial</Link>
```

Router navigation
```js
import { Link } from '@lightelligence/react';
import { MemoryRouter } from 'react-router';

<MemoryRouter
  initialEntries={[ '/devices' ]}
  initialIndex={0}>
  <Link to={'/devices'}>Open route</Link>
</MemoryRouter>
```
