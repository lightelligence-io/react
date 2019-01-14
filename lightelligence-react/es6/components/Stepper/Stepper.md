Stepper accepts either a node or a function (render prop) as the steps content. Is a function provided, then it will be called passing the following object:

```js static
{
  setStep, // Will set the step index - expects a number as the only argument
  nextStep, // Will increase the current step index by one
  previousStep, // Will decrease the current step index by one
  currentStepIdx, // The value of the current step index
}
```

The result will be rendered as the step content.

```js
const steps = [
  {
    id: 1,
    label: 'First',
    content: ({ nextStep }) => (
      <Button color="primary" onClick={nextStep}>
        next
      </Button>
    ),
  },
  {
    id: 2,
    label: 'Second',
    content: ({ previousStep }) => (
      <Button color="primary" onClick={previousStep}>
        previous
      </Button>
    ),
  },
  {
    id: 3,
    label: 'Third',
    content: (
      <Button color="primary" onClick={alert}>
        alert
      </Button>
    ),
  },
  {
    id: 4,
    label: 'Fourth',
    content: ({ currentStepIdx }) => (
      <Button color="primary" onClick={() => alert(currentStepIdx)}>
        alert current index
      </Button>
    ),
  },
];

<Stepper steps={steps} />;
```
