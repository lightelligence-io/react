```js
import { Copyable } from '@lightelligence/react';

<Copyable
  onCopy={(text)=> console.log(text)}
>
  This will be copied to clipboard.
</Copyable>
```

```js
import { Copyable } from '@lightelligence/react';
<Copyable
  onCopy={(text)=> console.log(text)}
  value='This will be copied to clipboard instead.'
>
  This text will not be copied to the clipboard, because value is defined differently.
</Copyable>
```
