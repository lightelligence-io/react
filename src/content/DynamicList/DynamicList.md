## Description

The **DynamicList** allows a number of similar entries. Use `onChange` callback to keep track of the user input. `onSubmit` is called when the user clicks the submit button.

The default element is `Input`. You need to specify a label for the element using the `inputProps` attribute. The label will be used for each input element shown to the user.

```js
import {
  DynamicList,
} from '@lightelligence/react';


const onSubmit = (values) => {
  alert(`You entered ${values.length} values: ${JSON.stringify(values)}`)
}

<div style={{display: 'flex', flexDirection: 'column'}}>
  <DynamicList
    onSubmit={onSubmit}
    inputProps={{
      label: "Enter your data",
    }}
  />
</div>
```

You can wrap the **DynamicList** in a **Dialog** component to show it as a modal.

```js
import {
  Dialog,
  DynamicList,
  Button,
} from '@lightelligence/react';

initialState = {
  dialogOpen: false,
};
const toggleDialog = () => {
  setState({ dialogOpen: !state.dialogOpen });
};

const onSubmit = (values) => {
  alert(`You entered ${values.length} values: ${JSON.stringify(values)}`)
  toggleDialog();
}

const dynamicList = (
  <DynamicList
    onSubmit={onSubmit}
    submitLabel="Submit"
    inputProps={{
      label: "Enter your data",
    }}
  />
);

<div>
  <Button color="primary" onClick={toggleDialog}>Dynamic List Dialog</Button>
  <Dialog
    title="All will be fine"
    description="All will be fine"
    content={dynamicList}
    open={state.dialogOpen}
    onClose={toggleDialog}
  />
</div>
```

You can use `values` to pass predefined initial values to the **DynamicList**.
- `maxItems` allows to define the maximum number of items the user has to add.
- `minItems` allows to define the minimum number of items the user has to add.

These attributes affect the appearance of the `add` and `remove` buttons and may disable the submit button.

```js
import {
  Dialog,
  DynamicList,
  Button,
} from '@lightelligence/react';

initialState = {
  dialogOpen: false,
  values: ['value1', 'value2', 'value3'],
};
const onSubmit = (values) => {
  alert(`You entered ${values.length} values: ${JSON.stringify(values)}`)
}

<div>
  <DynamicList
    onSubmit={onSubmit}
    submitLabel="Submit"
    maxItems={3}
    minItems={2}
    inputProps={{
      label: "Enter your data",
    }}
    values={state.values}
  />
</div>
```

You can use `onChange` to receive updates on user input.

Use `inputElement` to specify an input element different from `Input` and ensure you are passing all props needed by it using `inputProps`.

```js
import {
  DynamicList,
  Button,
  Input,
  Select
} from '@lightelligence/react';

initialState = {
  values: ['LoremIpsum'],
};

const onSubmit = () => {
  alert(`You entered ${state.values.length} values: ${JSON.stringify(state.values)}`)
  setState({ values: [] });
}

const onChange = (values) => {
    setState({ values });
}

const options = [
  { value: '', label: '', hidden: true },
  { value: 'LoremIpsum', label: 'Lorem Ipsum' },
  { value: 'DolorSitAmet', label: 'Dolor Sit Amet' },
  { value: 'EtVersus', label: 'Et Versus' }
];

<div style={{display: 'flex', flexDirection: 'column'}}>
  <DynamicList
    onChange={onChange}
    onSubmit={onSubmit}
    maxItems={2}
    inputProps={{
      label: "Please Select your data",
      options,
    }}
    inputElement={Select}
    values={state.values}
  />
</div>
```
