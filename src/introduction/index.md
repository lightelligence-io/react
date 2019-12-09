## Description

React components for Lightelligence.

These React Components represent [Lightelligence
UI Styleguide](https://lightelligence-io.github.io/styles).

## Getting Started

In order to use Lightelligence React Components, you need to install them via
npm.

```bash
$ npm install @lightelligence/react
$ npm install @lightelligence/styles
```

## Usage

You can use the components directly in your React Application.

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
UI Styleguide](https://lightelligence-io.github.io/styles), so make sure that
it is loaded via webpack

```js static
import '@lightelligence/styles/dist/index.css';
```
