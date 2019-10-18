
```js
import {
  Dialog,
  DynamicList,
  ListItem,
  V2Button,
  V2Input
} from '@lightelligence/react';

initialState = {
  dialogOpen: false,
  values: [],
};
const toggleDialog = () => {
  setState({ dialogOpen: !state.dialogOpen });
};

const onSubmit = () => {
  alert(`The user entered ${state.values.length} values: ${state.values}`)
  toggleDialog();
}

const onChange = (values) => {
    setState({ values });
}

const dynamicList = (
  <DynamicList
    onChange={onChange}
    inputProps={{
      label: "Enter your data",
    }}
    values={state.values}
  />
);

<div>
  <V2Button color="primary" onClick={toggleDialog}>Dynamic List Dialog</V2Button>
  <Dialog
    title="All will be fine"
    description="All will be fine"
    content={dynamicList}
    actions={[
      <V2Button key="ok" buttonType="action" onClick={onSubmit} disabled={state.values.length===0 || (state.values.length===1 && state.values[0].trim()==='')}>Ok</V2Button>
    ]}
    open={state.dialogOpen}
    onClose={toggleDialog}
  />
</div>
```
