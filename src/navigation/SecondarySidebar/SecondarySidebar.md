_SecondarySidebar_ creates a secondary sidebar for our application

```js
import { MemoryRouter } from 'react-router';
import {
  SidebarNavigation,
  SidebarNavigationItem,
  SidebarSelectorFilter,
  SidebarSelectorFilterItem,
  SidebarSeparator,
  SecondarySidebar,
  Sidebar,
} from '@lightelligence/react';

const [open, setOpen] = React.useState(false);

<div style={{ position: 'relative', minHeight: '600px', overflow: 'hidden' }}>
  <Sidebar style={{ position: 'absolute' }}>
    <SidebarSelectorFilter onClick={() => setOpen(!open)} active={open}>
      <SidebarSelectorFilterItem icon="office" name="Forschungszentrum" />
      <SidebarSelectorFilterItem icon="floorplan" name="2nd Floor" />
    </SidebarSelectorFilter>
    <SidebarSeparator />
    <MemoryRouter>
      <SidebarNavigation>
        <SidebarNavigationItem icon="home" title="Home" to="/home" />
        <SidebarNavigationItem icon="sensor" title="Devices" to="/devices" />
      </SidebarNavigation>
    </MemoryRouter>
  </Sidebar>
  <SecondarySidebar
    style={{ position: 'absolute' }}
    header="Filters"
    open={open}
  />
</div>;
```
