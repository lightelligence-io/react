## Description

Use the *StepperDialog* Component to render a modal dialog with multiple steps.

To render a basic stepper, pass the header for the stepper sidebar and a list of steps, each containing of title and the dialog elements (title, description, content). Dialog content can be a string or a react node.

The stepper should have a fixed width. So use `style={{height:'50vh', width:'800px'}}` to set it (the values will depend on your content!).

```js
import { StepperDialog, Button } from '@lightelligence/react';
initialState = { dialogOpen: false};
const toggleDialog = () => {
  setState({ dialogOpen: !state.dialogOpen });
};
<div>
  <Button color="primary" onClick={toggleDialog}>See the Example</Button>
  <StepperDialog
    stepperHeader="Create Device Type Category"
    steps={[
      {
        title: "Select Type",
        dialog: {
          title: "This is the Dialog Title of Step 1",
          description: "This is the Dialog Description of Step 1",
          content:'This is the Dialog Content for Step 1',
        }
      },
      {
        title: "Create Device",
        dialog: {
          title: "This is the Dialog Title of Step 2",
          description: "This is the Dialog Description of Step 2",
          content:'This is the Dialog Content for Step 2',
        },
      },
      {
        title: "Add Info",
        dialog: {
          title: "This is the Dialog Title of Step 3",
          description: "This is the Dialog Description of Step 3",
          content:'This is the Dialog Content for Step 3',
        },
      },
      {
        title: "Define Parameters",
        dialog: {
          title: "This is the Dialog Title of Step 4",
          description: "This is the Dialog Description of Step 4",
          content:'This is the Dialog Content for Step 4',
        },
      },
      {
        title: "Set up monitoring",
        dialog: {
          title: "This is the Dialog Title of Step 5",
          description: "This is the Dialog Description of Step 5",
          content:'This is the Dialog Content for Step 5',
        },
      }
    ]}
    open={state.dialogOpen}
    onClose={toggleDialog}
    onFinish={toggleDialog}
    style={{height:'50vh', width:'800px'}}
  />
</div>
```

## Steppers With Components

To render a stepper with interactive content, pass a react node as dialog content. You'll need to manage the state of the element you pass yourself.

`onFinish` and `onClose` callbacks will let you know when the user finishes or cancels the dialog.

Use the `activeStep` prop to select the start step.

Refer to the next example to learn more about controlling the stepper.

```js
import { StepperDialog, Button, Input } from '@lightelligence/react';
initialState = { dialogOpen: false, name: '<Skipped at first>', company: '', email: ''};
const toggleDialog = () => {
  setState({ dialogOpen: !state.dialogOpen });
};
const onChange = (field) => (event) => {
  setState({ [field]: event.target.value });
};
const onFinish = () => {
  const {name, company, email} = state;
  alert(`${name}(${email}) works at ${company}`);
  toggleDialog()
};

<div>
  <Button color="primary" onClick={toggleDialog}>See the Example</Button>
  <StepperDialog
    stepperHeader="The Step Stepper of Steps"
    steps={[
      {
        title: "Step 1",
        dialog: {
          title: "This is the first Step",
          description: "Please enter your personal data.",
          content: (
            <Input
              label="Enter your name"
              value={state.name}
              onChange={onChange('name')}
            />
          ),
        }
      },
      {
        title: "Step 2",
        dialog: {
          title: "This is the second Step",
          description: "Please enter your personal data.",
          content: (
            <Input
              label="Enter your company name"
              value={state.company}
              onChange={onChange('company')}
            />
          ),
        }
      },
      {
        title: "Step 3",
        dialog: {
          title: "This is the third Step",
          description: "Please enter your personal data.",
          content: (
            <Input
              label="Enter your email"
              value={state.email}
              onChange={onChange('email')}
            />
          ),
        }
      },
    ]}
    open={state.dialogOpen}
    onClose={toggleDialog}
    onFinish={onFinish}
    activeStep={1}
  />
</div>
```

## Steppers With Callbacks
You can use several callbacks and properties to control the functionality of the stepper.

`onProceed` and `onBack` callbacks will let you know when the user changes the step using provided buttons.

`onFinish` and `onClose` callbacks will let you know when the user finishes or cancels the dialog.

`activeStep` allows you to select the current step.

`proceedButton` and `backButton` properties can be used to configure the buttons of the dialog. They both take objects `(disabled: boolean, label: string, props: Object)` to disable the button, set the button label and pass additional props to the button.

Finally, you can use `dialogProps, windowProps, stepperProps, stepperHeaderProps,stepperCounterProps, stepperStepProps, stepperContentProps,closeProps, titleProps,descriptionProps, contentProps, footerProps` to set the properties of any of the sub-components of the stepper.

```js
import { StepperDialog, Button, Input } from '@lightelligence/react';
initialState = { dialogOpen: false, name: '', company: '', activeStep: 0};

const toggleDialog = () => {
  setState({ dialogOpen: !state.dialogOpen });
};

const onChange = (field) => (event) => {
  setState({ [field]: event.target.value });
};

const onFinish = () => {
  const {name, company} = state;
  alert(`${name} works at ${company}`);
  setState({activeStep: 0})
  toggleDialog()
};

const onProceed = (to) => {
  if (to === 0) alert(`You entered ${state.name}`)
  setState({activeStep: to})
}

const onBack = (to) => {
  if (to === 0) alert(`Please change ${state.name}`)
  setState({activeStep: to})
}

<div>
  <Button color="primary" onClick={toggleDialog}>See the Example with Callbacks</Button>
  <StepperDialog
    stepperHeader="The Step Stepper of Steps"
    steps={[
      {
        title: "Step 1",
        dialog: {
          title: "This is the first Step",
          description: "Please enter your personal data.",
          content: (
            <Input
              label="Enter your name"
              value={state.name}
              onChange={onChange('name')}
            />
          ),
        }
      },
      {
        title: "Step 2",
        dialog: {
          title: "This is the second Step",
          description: "Please enter your personal data.",
          content: (
            <Input
              label="Enter your company name"
              hint="Optional"
              value={state.company}
              onChange={onChange('company')}
            />
          ),
        }
      },
      {
        title: "Step 3",
        dialog: {
          title: "Great! You are done.",
          description: "Thanks for your input. All has been recorded.",
        }
      },
    ]}
    open={state.dialogOpen}
    style={{height:'50vh', width:'800px'}}
    onClose={toggleDialog}
    onProceed={onProceed}
    onBack={onBack}
    onFinish={onFinish}
    proceedButton={{
      disabled: (state.activeStep === 0 && state.name === ''),
      label: ((state.activeStep < 2) ? 'Weiter' : 'Fertig'),
    }}
    backButton={{
      disabled: (state.activeStep >= 2),
      label:  'Zurück',
    }}
    activeStep={state.activeStep}
  />
</div>
```
