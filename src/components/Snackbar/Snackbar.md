Snackbar example that indicates a successful operation.

```jsx
initialState = {
    open: false,
}
let timeout = null;

const setOpen = () => {
    if (timeout) {
        window.clearTimeout(timeout);
    }

    timeout = window.setTimeout(
        () => setState({ open: false}),
        800
    );

    setState({open: true});
};

<React.Fragment>
  <Headline size={4}>Success</Headline>
  <Button onClick={setOpen}>Click to open</Button>
  <Snackbar open={state.open} type="success">
    <Icon name="done_outline"/>Something went terrifically awesome.
  </Snackbar>
</React.Fragment>
```

Snackbar example that indicates an error.

```jsx
initialState = {
    open: false,
}
let timeout = null;

const setOpen = () => {
    if (timeout) {
        window.clearTimeout(timeout);
    }

    timeout = window.setTimeout(
        () => setState({ open: false}),
        800
    );

    setState({open: true});
};

<React.Fragment>
  <Headline size={4}>Error</Headline>
  <Button onClick={setOpen}>Click to open</Button>
  <Snackbar open={state.open} color="error">
    <Icon name="done_outline"/>Something went horribly wrong.
  </Snackbar>
</React.Fragment>
```

Source code for a simple Snackbar component.

```jsx static
    <Snackbar>
        Lorem Ipsum Dolor sit amet
    </Snackbar>
```

Source code for a Snackbar component with an icon.

```jsx static
    <Snackbar>
        <Icon name="error_outline"/>Error
    </Snackbar>
```

Source code for a Snackbar component indicating success.

```jsx static
    <Snackbar type="success">
        Success!
    </Snackbar>
```
