```jsx
import { Headline, Copyable } from '@lightelligence/react';

<Copyable
  onCopy={(text)=> console.log(text)}
>
  This will be copied to clipboard.
</Copyable>
```

```jsx
import { Copyable } from '@lightelligence/react';
<Copyable
  onCopy={(text)=> console.log(text)}
  value='This will be copied to clipboard instead.'
>
  This text will not be copied to the clipboard, because value is defined differently.
</Copyable>
```

```jsx
import { NotificationContainer, NotificationManager } from '@lightelligence/react';

const onCopy = () => NotificationManager.success({
    title: 'Copied to clipboard!',
});

<React.Fragment>
  <Copyable
    onCopy={onCopy}
  >
    This text will be copied to the clipboard and then you'll see a notification.
  </Copyable>
  <NotificationContainer />
</React.Fragment>
```
