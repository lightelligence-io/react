
Simple Tabs example

```js
import { Tabs, Tab } from '@lightelligence/react';
initialState = { value: 'tab1' };
const onSelect = (value) => { setState({ value }); };

<Tabs value={state.value} onSelect={onSelect}>
	<Tab label="Tab A" value="tab1"/>
	<Tab label="Tab B" value="tab2"/>
	<Tab label="Tab C" value="tab3"/>
</Tabs>
```

Tabs with content

```js
import { Container, Headline, Tabs, Tab } from '@lightelligence/react';
initialState = { value: 'tab1' };
const onSelect = (value) => {
	setState({ value });
};
<Container>
	<Tabs value={state.value} onSelect={onSelect}>
		<Tab value="tab1" label="Tab A">
			<Headline size={5}>TabContent A</Headline>
		</Tab>
		<Tab value="tab2" label="Tab B">
			<Headline size={5}>TabContent B</Headline>
		</Tab>
		<Tab value="tab3" label="Tab C">
			<Headline size={5}>TabContent C</Headline>
		</Tab>
	</Tabs>
</Container>
```
