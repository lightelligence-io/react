```jsx
import { Navbar, Menu, MenuItem, Dropdown } from '@lightelligence/react';
<Navbar color="dark">
  <Menu navbar>
    <MenuItem href="https://google.com">MenuItem 1</MenuItem>
    <MenuItem href="https://google.com">MenuItem 2</MenuItem>
    <MenuItem href="https://google.com">MenuItem 3</MenuItem>
    <MenuItem href="https://google.com">MenuItem 4</MenuItem>
  </Menu>
  <Menu navbar>
    <Dropdown label="Dropdown">
      <Menu submenu>
        <MenuItem href="https://google.com">MenuItem 1</MenuItem>
        <MenuItem href="https://google.com">MenuItem 2</MenuItem>
        <MenuItem href="https://google.com">MenuItem 3</MenuItem>
      </Menu>
    </Dropdown>
  </Menu>
</Navbar>
```
