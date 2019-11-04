# Showing a Dialog

Use the *Dialog* Component to render a modal dialog.

```js
import { Dialog, V2Button, Headline, Paragraph } from '@lightelligence/react';
initialState = { dialogOpen: false};
const toggleDialog = () => {
  setState({ dialogOpen: !state.dialogOpen });
};
<div>
    <V2Button color="primary" onClick={toggleDialog}>Basic Dialog</V2Button>
    <Dialog
      title="All will be fine"
      description="All will be fine"
      content='Lorem ipsum dolor sit amet'
      actions={[
        <V2Button key="ok" buttonType="action" onClick={toggleDialog}>Ok</V2Button>
      ]}
      open={state.dialogOpen}
      onClose={toggleDialog}
    />
</div>
```
