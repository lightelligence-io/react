```jsx
import { Navbar, Menu, MenuItem, Dropdown } from '@lightelligence/react';
<Navbar color="dark">
  <Menu navbar>
    <MenuItem href="https://lightelligence.io">MenuItem 1</MenuItem>
    <MenuItem href="https://lightelligence.io">MenuItem 2</MenuItem>
    <MenuItem href="https://lightelligence.io">MenuItem 3</MenuItem>
    <MenuItem href="https://lightelligence.io">MenuItem 4</MenuItem>
  </Menu>
  <Menu navbar>
    <Dropdown label="Dropdown">
      <Menu submenu>
        <MenuItem href="https://lightelligence.io">MenuItem 1</MenuItem>
        <MenuItem href="https://lightelligence.io">MenuItem 2</MenuItem>
        <MenuItem href="https://lightelligence.io">MenuItem 3</MenuItem>
      </Menu>
    </Dropdown>
  </Menu>
</Navbar>
```
