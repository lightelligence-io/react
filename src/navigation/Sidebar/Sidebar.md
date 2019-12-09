## Description

The sidebar for the navigation.

The mobile behaviour should be implemented in your application

```js
import { MemoryRouter } from 'react-router';
import {
  SidebarNavigation,
  SidebarNavigationItem,
  SidebarSubNavigationItem,
  SidebarSelectorFilter,
  SidebarSelectorFilterItem,
  SidebarSelectorProperty,
  SidebarSelectorTenant,
  SidebarSeparator,
  Sidebar,
} from '@lightelligence/react';
<Sidebar
  style={{ position: 'static', minHeight: '600px' }}
  bottom={
    <>
      <SidebarSelectorProperty
        title="Property Name"
        location="Berlin, Germany"
        onClick={() => alert('property selector')}
      />
      <SidebarSelectorTenant
        tenant="Tenant Name"
        onClick={() => alert('tenant selector')}
      />
    </>
  }
>
  <SidebarSelectorFilter onClick={() => alert('filter selector')}>
    <SidebarSelectorFilterItem icon="office" name="Forschungszentrum" />
    <SidebarSelectorFilterItem icon="floorplan" name="2nd Floor" />
  </SidebarSelectorFilter>
  <SidebarSeparator />
  <MemoryRouter>
    <SidebarNavigation>
      <SidebarNavigationItem icon="home" title="Home" to="/home" />
      <SidebarNavigationItem icon="sensor" title="Devices" to="/devices">
        <SidebarSubNavigationItem title="Devices" to="/devices/devices" />
        <SidebarSubNavigationItem title="Types" to="/devices/types" />
      </SidebarNavigationItem>
      <SidebarNavigationItem
        icon="app"
        title="Applications"
        to="/applications"
      />
      <SidebarNavigationItem icon="code" title="Code" to="/developer" />
      <SidebarNavigationItem icon="user-default" title="Team" to="/team" />
    </SidebarNavigation>
  </MemoryRouter>
</Sidebar>;
```
