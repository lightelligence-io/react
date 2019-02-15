
React components for Lightelligence. These React Components represent [Lightelligence
UI Styleguide](https://developers.lightelligence.io/ui).

## Getting Started

In order to use Lightelligence React Components, you need to install them via
npm. 

```bash
$ npm install @lightelligence/react
$ npm install @lightelligence/ui
```

## Usage

You can use the components directly into your React Application.

```jsx static
import React from 'react';
import {Button, COLOR_PRIMARY} from '@lightelligence/react';

const App = () => (
  <Button color={COLOR_PRIMARY}>
    Hello World
  </Button>
);
```

The components rely on [Lightelligence
UI Styleguide](https://developers.lightelligence.io/ui), so make sure that
it is loaded via webpack 

```css
@import "@lightelligence/ui/src/index";
```
