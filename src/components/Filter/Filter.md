```js
import { Filter, Checkbox, V2Button, Card } from '@lightelligence/react';
initialState = {
    active: false,
    open: false,
    filterItems: {}
};
const onChange = (item) => (value) => {
    const filterItems = {...state.filterItems}
    if (value) filterItems[item] = value
    else delete filterItems[item]
    const hasItems = Object.keys(filterItems).length>0
    setState({ filterItems, active: hasItems });
};

const onApply = () => {
    const hasItems = Object.keys(state.filterItems).length>0
    setState({ active: hasItems, open: false });
}

const toggleOpen = () => {
    console.log(state.open)
    setState({ open: !state.open })
}
<Card color="light" style={{flex: 1, flexDirection: 'row'}}>
    <Filter
        count={22}
        open={state.open}
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
        actions={[
            <V2Button key="apply" buttonType="action" onClick={onApply}>Apply</V2Button>
        ]}
        onApply={() => setState({ active: true })}
        toggleOpen={toggleOpen}
    />
</Card>
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
    setState({ active: false, filterItems: {}, open: false })
}

const handleOpen = () => {
    setState({ open: !state.open })
}
<Filter
    active={state.active}
    buttonLabel="Device Types"
    open={state.open}
    toggleOpen={handleOpen}
    content={(
        <>
            <Checkbox checked={state.filterItems.brightness} onChange={handleChange('brightness')}>Brightness</Checkbox>
            <Checkbox checked={state.filterItems.Humidity} onChange={handleChange('Humidity')}>Humidity</Checkbox>
            <Checkbox checked={state.filterItems.occupancy} onChange={handleChange('occupancy')}>Occupancy</Checkbox>
            <Checkbox checked={state.filterItems.power} onChange={handleChange('power')}>Power Consumption</Checkbox>
        </>
    )}
    actions={[
        <V2Button key="clear" emphasis="tertiary" onClick={handleClear}>Clear</V2Button>,
        <V2Button key="reset" emphasis="tertiary" onClick={handleReset}>Reset</V2Button>,
        <V2Button key="apply" buttonType="action" onClick={handleApply}>Apply</V2Button>,
    ]}
/>
```
