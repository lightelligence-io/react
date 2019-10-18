
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
  value: {0: 'hello'},
};
const toggleDialog = () => {
  setState({ dialogOpen: !state.dialogOpen });
};

const onChange = (id, e) => {
  setState({ value: {
    ...state.value,
    [id]: e.target.value,
  }});
}

const dynamicList = (
  <DynamicList
    inputProps={{
      onChange,
      value: state.value[0],
      label: "Enter your data",
    }}
    inputElement={V2Input}
  />
);

<div>
  <V2Button color="primary" onClick={toggleDialog}>Dynamic List Dialog</V2Button>
  <Dialog
    title="All will be fine"
    description="All will be fine"
    content={dynamicList}
    actions={[
      <V2Button key="ok" buttonType="action" onClick={toggleDialog}>Ok</V2Button>
    ]}
    open={state.dialogOpen}
    onClose={toggleDialog}
  />
</div>
```
