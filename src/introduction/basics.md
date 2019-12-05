## Description

Here are some helpful basic concepts when using the Styleguide.

## RootElements

Start building your application by looking at [RootMainContainer](#/Layout/RootMainContainer)

## Theme

If you want to change the primary color of your app, wrap your RootMainContainer inside a [Theme](#/Layout/Theme) element.

## Utility Classes

Utility classes from the [Lightelligence
UI Styleguide](https://lightelligence-io.github.io/styles) can be used to customize elements using classnames.


```js
import {H500, oltStyles} from '@lightelligence/react';
import classnames from 'classnames';

<H500 className={classnames(oltStyles.uBackgroundColorWarning, oltStyles.uDisplayFlex, oltStyles.uJustifyContentCenter)}>oltStyles</H500>
```

