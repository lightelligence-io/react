## Description

A simple list component.

```jsx
import { List, ListItem } from '@lightelligence/react';
<List>
  <ListItem>Item One</ListItem>
  <ListItem>Item Two</ListItem>
  <ListItem>Item Three</ListItem>
</List>
```

## Ordered Lists

```jsx
import { List, ListItem } from '@lightelligence/react';
<List ordered>
  <ListItem>Item One</ListItem>
  <ListItem>Item Two</ListItem>
  <ListItem>Item Three</ListItem>
</List>
```

## Definition Lists

```jsx
import { List, ListItem, Chip } from '@lightelligence/react';
<List definition>
  <ListItem term="Device Name">Waterproofed solar roof</ListItem>
  <ListItem term="Device Type">Gateway</ListItem>
  <ListItem term="Description">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
  </ListItem>
  <ListItem term="Firmware">DEV2S</ListItem>
  <ListItem term="Tags">
    <Chip>Light</Chip>
    <Chip>Intelligence</Chip>
  </ListItem>
  <ListItem term="Status">online</ListItem>
</List>
```

## Vertically stacked definition lists

```jsx
import { List, ListItem, Chip } from '@lightelligence/react';
<List definition vertical="xl">
  <ListItem term="Device Name">Waterproofed solar roof</ListItem>
  <ListItem term="Device Type">Gateway</ListItem>
  <ListItem term="Description">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
  </ListItem>
  <ListItem term="Firmware">DEV2S</ListItem>
  <ListItem term="Tags">
    <Chip>Light</Chip>
    <Chip>Intelligence</Chip>
  </ListItem>
  <ListItem term="Status">online</ListItem>
</List>
```