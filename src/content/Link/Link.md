Simple Textlink

```js
<Link target="_blank" to="https://google.com">Read Tutorial</Link>
```

Router navigation
```js
const { MemoryRouter } = require('react-router');

<MemoryRouter
  initialEntries={[ '/devices' ]}
  initialIndex={0}>
  <Link to={'/devices'}>Open route</Link>
</MemoryRouter>
```
