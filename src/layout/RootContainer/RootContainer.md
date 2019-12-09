## Description

Note that in this example we take care of triggering the
[SecondarySidebar](#/Navigation/SecondarySidebar) with a simple use of
`React.useState`. The user has total control of the interaction between the
[Header](#/Navigation/Header), [Sidebar](#/Navigation/Sidebar) and
[SecondarySidebar](#/Navigation/SecondarySidebar)

```js
import { MemoryRouter } from 'react-router';
import {
  RootContainer,
  Header,
  ActionButton,
  Tabs,
  Tab,
  Sidebar,
  SidebarSeparator,
  SidebarSelectorProperty,
  SidebarSelectorTenant,
  SidebarSelectorFilter,
  SidebarSelectorFilterItem,
  SidebarNavigation,
  SidebarNavigationItem,
  SidebarSubNavigationItem,
  RootMainContainer,
  SecondarySidebar,
  Card,
} from '@lightelligence/react';

const logo = require('../../../resources/lightelligence.svg');

const [currentNavigation, setCurrentNavigation] = React.useState(false);

const MyHeader = () => (
  <Header
    style={{ position: 'static' }} /* Used for demo purposes */
    logo={<img src={logo} />}
    left={
      <ActionButton label="Back" iconLeft="chevron-left" buttonType="default" />
    }
    right={
      <ActionButton label="Logout" buttonType="default" iconRight="locked" />
    }
  >
    <Tabs value="details">
      <Tab label="Details" value="details" />
      <Tab label="Permissions" />
      <Tab label="Redirects" />
      <Tab label="Tenants" />
    </Tabs>
  </Header>
);

const MySidebar = () => (
  <Sidebar
    style={{ position: 'absolute', minHeight: '600px' }}
    bottom={[
      <SidebarSelectorProperty
        title="Property Name"
        location="Berlin, Germany"
        onClick={() =>
          setCurrentNavigation(
            currentNavigation === 'property' ? null : 'property',
          )
        }
      />,
      <SidebarSelectorTenant
        tenant="Tenant Name"
        onClick={() => alert('tenant selector')}
      />,
    ]}
  >
    <SidebarSelectorFilter
      onClick={() =>
        setCurrentNavigation(currentNavigation === 'filter' ? null : 'filter')
      }
    >
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
  </Sidebar>
);

<div style={{ position: 'relative', minHeight: '600px', overflow: 'hidden' }}>
  <RootContainer>
    <MyHeader />
    <MySidebar />
    <SecondarySidebar
      style={{ position: 'absolute' }}
      header="Filters"
      open={currentNavigation === 'filter'}
    />
    <SecondarySidebar
      style={{ position: 'absolute' }}
      header="Properties"
      open={currentNavigation === 'property'}
    />
    <RootMainContainer>
      <Card>Content</Card>
    </RootMainContainer>
  </RootContainer>
</div>;
```
