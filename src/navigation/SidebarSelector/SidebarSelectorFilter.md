## Description

Create a Filter Selector element for the sidebar.

```jsx
import {
  Sidebar,
  SidebarSelectorFilter,
  SidebarSelectorFilterItem,
} from '@lightelligence/react';
<Sidebar style={{ position: 'static' }}>
  <SidebarSelectorFilter onClick={() => alert('Selected')}>
    <SidebarSelectorFilterItem icon="office" name="Forschungszentrum" />
    <SidebarSelectorFilterItem icon="floorplan" name="2nd Floor" />
  </SidebarSelectorFilter>
</Sidebar>;
```
