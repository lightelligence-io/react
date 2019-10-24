# Showing a StepperDialog

Use the *StepperDialog* Component to render a modal dialog with multiple steps.

```js
import { StepperDialog, V2Button, Headline, Paragraph } from '@lightelligence/react';
initialState = { dialogOpen: false};
const toggleDialog = () => {
  setState({ dialogOpen: !state.dialogOpen });
};
<div>
    <V2Button color="primary" onClick={toggleDialog}>Basic Stepper</V2Button>
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
      open={state.dialogOpen}
      onClose={toggleDialog}
      onFinish={toggleDialog}
    />
</div>
```


```js
import { StepperDialog, V2Button, V2Input, Headline, Paragraph } from '@lightelligence/react';
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
    <V2Button color="primary" onClick={toggleDialog}>Stepper with Components</V2Button>
    <StepperDialog
      stepperHeader="The Step Stepper of Steps"
      steps={[
        {
          title: "Step 1",
          dialog: {
            title: "This is the first Step",
            description: "Please enter your personal data.",
            content: (
              <V2Input
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
              <V2Input
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
              <V2Input
                label="Enter your email"
                value={state.company}
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


```js
import { StepperDialog, V2Button, V2Input, Headline, Paragraph } from '@lightelligence/react';
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
    <V2Button color="primary" onClick={toggleDialog}>Stepper with Callbacks</V2Button>
    <StepperDialog
      stepperHeader="The Step Stepper of Steps"
      steps={[
        {
          title: "Step 1",
          dialog: {
            title: "This is the first Step",
            description: "Please enter your personal data.",
            content: (
              <V2Input
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
              <V2Input
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
    />
</div>
```
