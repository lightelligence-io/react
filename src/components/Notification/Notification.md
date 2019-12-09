## Description

Use the *Notification* Component to render a notification.

**Click the button below multiple times** to see different notifications. The
notifications have different timeouts and some stay until you click them
away.

```jsx
import {
  Paragraph,
  Button,
  NotificationContainer,
  NotificationManager,
} from '@lightelligence/react';

const notify = () => {
  const demos = [
    () =>
      NotificationManager.info({
        title: 'Yeah!! Success!',
        content: 'As usually, we succeeded in the end.',
        timeout: 1000,
        onClose: () => console.log('Info has been closed'),
        onClick: () => console.log('Info has been clicked'),
        onHide: () => console.log('Info  has been hidden'),
      }),
    () =>
      NotificationManager.error({
        title: 'Error!!',
        content: 'Something very bad has happened.',
        timeout: 6000,
        onClose: () => console.log('Error has been closed'),
        onClick: () => console.log('Error has been clicked'),
        onHide: () => console.log('Error has been hidden'),
      }),
    () =>
      NotificationManager.error({
        title: 'Error!!',
        timeout: 0,
        content: 'Something very bad IS NOT GOING AWAY!',
        onClose: () => console.log('Error has been closed'),
        onClick: () => console.log('Error has been clicked'),
        onHide: () => console.log('Error has been hidden'),
      }),
    () =>
      NotificationManager.warning({
        title: 'A Fair Warning.',
        content: 'Something bad might happen.',
        timeout: 4000,
        onClose: () => console.log('Warning has been closed'),
        onClick: () => console.log('Warning has been clicked'),
        onHide: () => console.log('Warning has been hidden'),
      }),
    () =>
      NotificationManager.success({
        title: 'Success!',
        content: 'All is well.',
        timeout: 3000,
        onClose: () => console.log('Success has been closed'),
        onClick: () => console.log('Success has been clicked'),
        onHide: () => console.log('Success has been hidden'),
      }),
  ];
  const index = Math.floor(Math.random() * 5);
  demos[index]();
};

<>
  <Button onClick={notify}>Click Me</Button>
  <NotificationContainer />
</>;
```

## Error Notification

The Notification example below indicates an error.

The example uses `timeout: 0` to stop the notifcation from closing automatically.

Use `type="info" | "success" | "warning" | "error"` to create the other notifcation types shown below.

```jsx
import {
  Paragraph,
  Button,
  NotificationContainer,
  NotificationManager,
} from '@lightelligence/react';

const notify = () =>
  NotificationManager.error({
    title: 'Error!!',
    timeout: 0,
    content: 'Something very bad has happened AND IT IS NOT GOING AWAY!',
  });

<>
  <Button onClick={notify}>Click to open</Button>
  <NotificationContainer />
</>;
```

## Notification Types

The following types of notifications can be created. <br /><br />


```jsx noeditor
import { Paragraph, Notification } from '@lightelligence/react';
import * as olt from '@lightelligence/styles';

<>
  <div
    className={olt.NotificationContainer}
    style={{ position: 'relative', margin: '10px' }}
  >
    <Notification
      type="info"
      title="Info Notification"
      timeout={0}
      content="Here is some information."
    />
    <Notification
      type="success"
      title="Success Notification"
      timeout={0}
      content="That was a success!"
    />
    <Notification
      type="warning"
      title="Warning Notification"
      timeout={0}
      content="This is only a warning!"
    />
    <Notification
      type="error"
      title="Error Notification"
      timeout={0}
      content="An error has occured!"
    />
  </div>
</>;
```

```jsx static
() => NotificationManager.info({
    title="Info Notification"
    content: 'Here is some information.',
    timeout: 1000,
    onClose: () => {...}),
    onClick: () => {...}),
    onHide: () => {...}),
});
() => NotificationManager.success({
    title="Success Notification"
    content: 'That was a success!',
    timeout: 1000,
    onClose: () => {...}),
    onClick: () => {...}),
    onHide: () => {...}),
});
() => NotificationManager.warning({
    title="Warning Notification"
    content: 'This is only a warning!',
    timeout: 1000,
    onClose: () => {...}),
    onClick: () => {...}),
    onHide: () => {...}),
});
() => NotificationManager.error({
    title="Error Notification"
    content: 'An error has occured!',
    timeout: 1000,
    onClose: () => {...}),
    onClick: () => {...}),
    onHide: () => {...}),
});
```
