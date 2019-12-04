## Description

Create a Tenant Selector element for the sidebar.

```jsx
import { Sidebar, SidebarSelectorTenant } from '@lightelligence/react';
<Sidebar style={{ position: 'static' }}>
  <SidebarSelectorTenant tenant="Foo" onClick={() => alert('selector')} />
</Sidebar>;
```
