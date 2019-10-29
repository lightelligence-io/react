```js
import { Filter, Checkbox } from '@lightelligence/react';
initialState = {
    active: false,
    filterItems: {}
};
const onChange = (item) => (value) => {
    const filterItems = {...state.filterItems}
    filterItems[item] = value
    setState({ filterItems });
};

<Filter
    count={22}
    active={state.active}
    buttonLabel="Device Types"
    content={(
        <>
            <Checkbox checked={state.filterItems.brightness} onChange={onChange('brightness')}>Brightness</Checkbox>
            <Checkbox checked={state.filterItems.Humidity} onChange={onChange('Humidity')}>Humidity</Checkbox>
            <Checkbox checked={state.filterItems.occupancy} onChange={onChange('occupancy')}>Occupancy</Checkbox>
            <Checkbox checked={state.filterItems.power} onChange={onChange('power')}>Power Consumption</Checkbox>
        </>
    )}
    onApply={() => setState({ active: true })}
/>
```

```js
import { Filter, Checkbox, V2Button } from '@lightelligence/react';
initialState = {
    active: false,
    open: false,
    filterItems: {}
};
const handleChange = (item) => (value) => {
    const filterItems = {...state.filterItems}
    filterItems[item] = value
    setState({ filterItems });
};

const handleApply = () => {
    setState({ active: true, open: false })
}

const handleClear = () => {
    setState({ filterItems: {} })
}

const handleReset = () => {
    setState({ active: false, open: false })
}

const handleOpen = () => {
    setState({ open: true })
}

<Filter
    active={state.active}
    buttonLabel="Device Types"
    open={state.open}
    onOpen={handleOpen}
    content={(
        <>
            <Checkbox checked={state.filterItems.brightness} onChange={handleChange('brightness')}>Brightness</Checkbox>
            <Checkbox checked={state.filterItems.Humidity} onChange={handleChange('Humidity')}>Humidity</Checkbox>
            <Checkbox checked={state.filterItems.occupancy} onChange={handleChange('occupancy')}>Occupancy</Checkbox>
            <Checkbox checked={state.filterItems.power} onChange={handleChange('power')}>Power Consumption</Checkbox>
        </>
    )}
    actions={[
        <V2Button key="apply" buttonType="action" onClick={handleApply}>Apply</V2Button>,
        <V2Button key="reset" buttonType="tertiary" onClick={handleReset}>Reset</V2Button>,
        <V2Button key="clear" buttonType="tertiary" onClick={handleClear}>Clear</V2Button>,
    ]}
/>
```
