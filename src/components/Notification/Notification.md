
```jsx
import { Headline, Paragraph, Button, NotificationContainer, NotificationManager } from '@lightelligence/react';

const notify = () => {
    const demos = [
        () => NotificationManager.info({
            title: 'Yeah!! Success!',
            content: 'As usually, we succeeded in the end.',
            timeout: 1000,
            onClose: () => console.log('Info has been closed'),
            onClick: () => console.log('Info has been clicked'),
            onHide: () => console.log('Info  has been hidden'),
        }),
        () => NotificationManager.error({
            title: 'Error!!',
            content: 'Something very bad has happened.',
            timeout: 6000,
            onClose: () => console.log('Error has been closed'),
            onClick: () => console.log('Error has been clicked'),
            onHide: () => console.log('Error has been hidden'),
        }),
        () => NotificationManager.error({
            title: 'Error!!',
            timeout: 0,
            content: 'Something very bad IS NOT GOING AWAY!',
            onClose: () => console.log('Error has been closed'),
            onClick: () => console.log('Error has been clicked'),
            onHide: () => console.log('Error has been hidden'),
        }),
        () => NotificationManager.warning({
            title: 'A Fair Warning.',
            content: 'Something bad might happen.',
            timeout: 4000,
            onClose: () => console.log('Warning has been closed'),
            onClick: () => console.log('Warning has been clicked'),
            onHide: () => console.log('Warning has been hidden'),
        }),
        () => NotificationManager.success({
            title: 'Success!',
            content: 'All is well.',
            timeout: 3000,
            onClose: () => console.log('Success has been closed'),
            onClick: () => console.log('Success has been clicked'),
            onHide: () => console.log('Success has been hidden'),
        }),
    ]
    const index = Math.floor(Math.random() * 5)
    demos[index]()
};

<React.Fragment>
  <Headline size={4}>General Demo</Headline>
  <Paragraph>Click the button below multiple times to see different notifications. The notifications have different timeouts and some stay until you click them away.</Paragraph>
  <Button onClick={notify}>Click Me</Button>
  <NotificationContainer />
</React.Fragment>
```


```jsx
import { Headline, Paragraph, Button, NotificationContainer, NotificationManager } from '@lightelligence/react';

const notify = () => NotificationManager.error({
    title: 'Error!!',
    timeout: 0,
    content: 'Something very bad has happened AND IT IS NOT GOING AWAY!',
});

<React.Fragment>
  <Headline size={4}>Error Notification</Headline>
  <Paragraph>Notification example that indicates an error. The example uses timeout: 0 to stop the notifcation from closing automatically.</Paragraph>
  <Button onClick={notify}>Click to open</Button>
  <NotificationContainer />
</React.Fragment>
```

```jsx noeditor
import { Headline, Paragraph, Notification, NOTIFICATION_TYPE_INFO, NOTIFICATION_TYPE_SUCCESS, NOTIFICATION_TYPE_WARNING, NOTIFICATION_TYPE_ERROR } from '@lightelligence/react';
import * as olt from '@lightelligence/styles';

<React.Fragment>
  <Headline size={4}>Notification Types</Headline>
  <Paragraph>The following types of notifications can be created.</Paragraph>
  <div className={olt.NotificationContainer} style={{position: 'relative', margin: '10px'}}>
    <Notification
        type={NOTIFICATION_TYPE_INFO}
        title='INFO!'
        timeout={0}
        content='Here is some information.'
    />
    <Notification
        type={NOTIFICATION_TYPE_SUCCESS}
        title='SUCCESS!'
        timeout={0}
        content='That was a success!'
    />
    <Notification
        type={NOTIFICATION_TYPE_WARNING}
        title='WARNING!'
        timeout={0}
        content='This is only a warning!'
    />
    <Notification
        type={NOTIFICATION_TYPE_ERROR}
        title='ERROR!'
        timeout={0}
        content='An error has occured!'
    />
  </div>
</React.Fragment>
```

``` jsx static
() => NotificationManager.info({
    title: 'INFO!',
    content: 'Here is some information.',
    timeout: 1000,
    onClose: () => {...}),
    onClick: () => {...}),
    onHide: () => {...}),
});
() => NotificationManager.success({
    title: 'SUCCESS!',
    content: 'That was a success!',
    timeout: 1000,
    onClose: () => {...}),
    onClick: () => {...}),
    onHide: () => {...}),
});
() => NotificationManager.warning({
    title: 'WARNING!',
    content: 'This is only a warning!',
    timeout: 1000,
    onClose: () => {...}),
    onClick: () => {...}),
    onHide: () => {...}),
});
() => NotificationManager.error({
    title: 'ERROR!',
    content: 'An error has occured!',
    timeout: 1000,
    onClose: () => {...}),
    onClick: () => {...}),
    onHide: () => {...}),
});
```