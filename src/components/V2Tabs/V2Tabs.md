
Simple Tabs example

```js
import { TaV2bs, V2Tab } from '@lightelligence/react';
initialState = { value: 'tab1' };
const onSelect = (value) => { setState({ value }); };

<V2Tabs value={state.value} onSelect={onSelect}>
	<V2Tab label="Tab A" value="tab1"/>
	<V2Tab label="Tab B" value="tab2"/>
	<V2Tab label="Tab C" value="tab3"/>
	<V2Tab label="Tab D" value="tab4"/>
	<V2Tab label="Tab E" value="tab5"/>
	<V2Tab label="Tab F" value="tab6"/>
</V2Tabs>
```

