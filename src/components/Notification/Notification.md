Notification example that indicates a successful operation.

```jsx
import { Headline, Button, Notification, Icon } from '@lightelligence/react';
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
        5200
    );

    setState({open: true});
};

const onClose = () => {
    setState({open: false});
}

<React.Fragment>
  <Headline size={4}>Success</Headline>
  <Button onClick={setOpen}>Click to open</Button>
  <Notification 
    open={state.open} 
    type="success" 
    header="Yeah!! Success!"
    content="As usually, we succeeded in the end." 
    onClose={onClose}
    />
</React.Fragment>
```

<!-- 

Notification example that indicates an error.

```jsx
import { Headline, Button, Notification, Icon } from '@lightelligence/react';
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
  <Notification open={state.open} color="error">
    <Icon name="done_outline"/>Something went horribly wrong.
  </Notification>
</React.Fragment>
```

Source code for a simple Notification component.

```jsx static
    <Notification>
        Lorem Ipsum Dolor sit amet
    </Notification>
```

Source code for a Notification component with an icon.

```jsx static
    <Notification>
        <Icon name="error_outline"/>Error
    </Notification>
```

Source code for a Notification component indicating success.

```jsx static
    <Notification type="success">
        Success!
    </Notification>
``` 

-->
