## Description

An element showing an icon to copied the content to the clipboard.


```js
import { Copyable } from '@lightelligence/react';

<Copyable
  onCopy={(text)=> console.log(text)}
  style={{padding: "4px 8px"}}
>
  This will be copied to clipboard.
</Copyable>
```

## Value

You can copy text that is different from the text that is displayed using the value attribute.

```js
import { Copyable } from '@lightelligence/react';
<Copyable
  onCopy={(text)=> console.log(text)}
  value='This will be copied to clipboard instead.'
  style={{padding: "4px 8px"}}
>
  This text will not be copied to the clipboard, because value is defined differently.
</Copyable>
```

## With Feedback

It is recommended to show a notification on copy.

```js
import { NotificationContainer, NotificationManager } from '@lightelligence/react';
const onCopy = () => NotificationManager.success({
  title: 'Copied to clipboard!',
});
<>
  <Copyable
    onCopy={onCopy}
    style={{padding: "4px 8px"}}
  >
      This text will be copied to the clipboard and then you'll see a notification.
  </Copyable>

  <NotificationContainer />
</>
```
