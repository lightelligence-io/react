React components for Lightelligence. These React Components represent [Lightelligence
UI Styleguide](https://developers.lightelligence.io/styles).

## Getting Started

In order to use Lightelligence React Components, you need to install them via
npm.

```bash
$ npm install @lightelligence/react
$ npm install @lightelligence/styles
```

## Usage

You can use the components directly into your React Application.

```jsx static
import React from 'react';
import {Button} from '@lightelligence/react';

const App = () => (
  <Button>
    Hello World
  </Button>
);
```

The components rely on [Lightelligence
UI Styleguide](https://developers.lightelligence.io/styles), so make sure that
it is loaded via webpack

```js static
import '@lightelligence/styles/dist/index.css';
```
