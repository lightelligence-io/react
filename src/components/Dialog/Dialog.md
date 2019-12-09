## Showing a Dialog

Use the *Dialog* Component to render a modal dialog.

A dialog displays content in a layer above the application interface, requiring user interaction.

The dialog changes to full screen on mobile and tablet devices.

On desktops it can take any size up to `95vw`. The size it actually takes depends on the size of the content you set.

```js
import { Dialog, Button, Paragraph } from '@lightelligence/react';
initialState = { dialogOpen: false};
const toggleDialog = () => {
  setState({ dialogOpen: !state.dialogOpen });
};
<div>
    <Button color="primary" onClick={toggleDialog}>Basic Dialog</Button>
    <Dialog
      title="All will be fine"
      description="All will be fine"
      content='Lorem ipsum dolor sit amet'
      actions={[
        <Button key="ok" buttonType="action" onClick={toggleDialog}>Ok</Button>
      ]}
      open={state.dialogOpen}
      onClose={toggleDialog}
    />
</div>
```
