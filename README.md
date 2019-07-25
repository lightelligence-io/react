<a href="https://lightelligence.io" align="right">
    <img src="/resources/logo.png" alt="logo" title="logo" align="right" />
</a>

# React

[![Build Status](https://img.shields.io/travis/com/lightelligence-io/react.svg)](https://travis-ci.com/lightelligence-io/react/branches)
[![Dependencies](https://img.shields.io/david/lightelligence-io/react.svg)](https://david-dm.org/lightelligence-io/react)
[![npm (scoped)](https://img.shields.io/npm/v/@lightelligence/react.svg)](https://www.npmjs.com/package/@lightelligence/react)

> The Lightelligence design system React Components

## Installation

```
npm install @lightelligence/react
```

## Features

The Lightelligence React are a set of React components, styled according to our
design system. It is a representation of
[Lightelligence Styles](https://github.com/lightelligence-io/styles).

## Usage

Make sure to include the bundled CSS in your React Application as well as
wrapping your content in [`<Frame />`](https://lightelligence-io.github.io/react/#/Components/Frame)
component.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import '@lightelligence/react/dist/index.css';
import { Button, COLOR_PRIMARY } from '@lightelligence/react';

const App = () => (
  <Frame>
    <Button color={COLOR_PRIMARY}>Hello World</Button>
  </Frame>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

Check out [the API reference](https://lightelligence-io.github.io/react/)
to see the full documentation.

## License

MIT
