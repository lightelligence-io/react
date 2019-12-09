
## Description

Tabs are an easy way to organize content by grouping similar information on the same page. This allows content to be viewed without having to navigate away from that page.

```js
import { Tabs, Tab } from '@lightelligence/react';
initialState = { value: 'tab1' };
const onSelect = (value) => { setState({ value }); };

<Tabs value={state.value} onSelect={onSelect}>
	<Tab label="Tab A" value="tab1"/>
	<Tab label="Tab B" value="tab2"/>
	<Tab label="Tab C" value="tab3"/>
	<Tab label="Tab D" value="tab4"/>
	<Tab label="Tab E" value="tab5"/>
	<Tab label="Tab F" value="tab6"/>
</Tabs>
```

