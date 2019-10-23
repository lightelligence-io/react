# Showing a StepperDialog

Use the *Dialog* Component to render a modal dialog.

```js
import { StepperDialog, V2Button, Headline, Paragraph } from '@lightelligence/react';
initialState = { dialogOpen: false};
const toggleDialog = () => {
  setState({ dialogOpen: !state.dialogOpen });
};
<div>
    <V2Button color="primary" onClick={toggleDialog}>Basic Dialog</V2Button>
    <StepperDialog
      stepperHeader="Create Device Type Category"
      steps={[
        {
          title: "Select Type",
          dialog: {
            title: "All will be fine",
            description: "All will be fine",
            content:'Lorem ipsum dolor sit amet 1111111',
          }
        },
        {
          title: "Create Device",
          dialog: {
            title: "All will be fine",
            description: "All will be fine",
            content: 'Lorem ipsum dolor sit amet 2222222',
          },
        },
        {
          title: "Add Info",
          dialog: {
            title: "All will be fine",
            description: "All will be fine",
            content: 'Lorem ipsum dolor sit amet 3333333',
          },
        },
        {
          title: "Define Parameters",
          dialog: {
            title: "All will be fine",
            description: "All will be fine",
            content: 'Lorem ipsum dolor sit amet 4444444',
          },
        },
        {
          title: "Set up monitoring",
          dialog: {
            title: "All will be fine",
            description: "All will be fine",
            content: 'Lorem ipsum dolor sit amet 5555555',
          },
        }
      ]}
      actions={[
        <V2Button key="ok" buttonType="action" onClick={toggleDialog}>Ok</V2Button>
      ]}
      open={state.dialogOpen}
      onClose={toggleDialog}
      onFinish={toggleDialog}
    />
</div>
```
