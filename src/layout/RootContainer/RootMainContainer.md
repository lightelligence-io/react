## Description

For better understanding on the interaction between the
[Header](#/Navigation/Header), [Sidebar](#/Navigation/Sidebar) and
[SecondarySidebar](#/Navigation/SecondarySidebar) please check the
[RootContainer](#/Layout/RootContainer).

_Please note that the blurred overlay doesn't work in this example_

```js
import {
  RootContainer,
  Header,
  Sidebar,
  SidebarSeparator,
  SidebarSelectorFilter,
  SidebarSelectorFilterItem,
  RootMainContainer,
  SecondarySidebar,
  Card,
} from '@lightelligence/react';

const [open, setOpen] = React.useState(false);

<div style={{ position: 'relative', minHeight: '600px', overflow: 'hidden' }}>
  <RootContainer>
    <Header
      style={{ position: 'static' }} /* Used for demo purposes */
      logo={'MyApp'}
    />
    <Sidebar style={{ position: 'absolute', minHeight: '600px' }}>
      <SidebarSelectorFilter onClick={() => setOpen(!open)}>
        <SidebarSelectorFilterItem icon="office" name="Forschungszentrum" />
        <SidebarSelectorFilterItem icon="floorplan" name="2nd Floor" />
      </SidebarSelectorFilter>
      <SidebarSeparator />
    </Sidebar>
    <SecondarySidebar
      style={{ position: 'absolute' }}
      header="Filters"
      open={open}
    />
    <RootMainContainer>
      <Card>My Application's content</Card>
    </RootMainContainer>
  </RootContainer>
</div>;
```
