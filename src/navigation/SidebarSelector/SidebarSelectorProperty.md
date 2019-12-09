## Description

Create a Property Selector element for the sidebar.

```jsx
import { Sidebar, SidebarSelectorProperty } from '@lightelligence/react';
<Sidebar style={{ position: 'static' }}>
  <SidebarSelectorProperty
    title="Property Name"
    location="Berlin, Germany"
    onClick={() => alert('selected')}
  />
</Sidebar>;
```
