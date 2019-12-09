# Description

Radio Group

```js
import { RadioGroup, Radio } from '@lightelligence/react';

initialState = { value: 'a' };
const onChange = (value) => { setState({ value }); }

<RadioGroup name="radio-group" value={state.value} onChange={onChange}>
	<Radio value="a">Option A</Radio>
	<Radio value="b">Option B</Radio>
	<Radio value="c">Option C</Radio>
</RadioGroup>
```
