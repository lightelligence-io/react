## Description

The component renders an Avatar for a user, e.g. **Jim**

```js
import { Avatar } from '@lightelligence/react';
<Avatar name="Jim" />
```

## Size

```js
import { Avatar, FloatingList } from '@lightelligence/react';
<FloatingList>
  <Avatar name="Jim" size="s" />
  <Avatar name="Jim" size="m" />
  <Avatar name="Jim" size="l" />
</FloatingList>
```

## Colors

The Avatar can be rendered with any of the defined colors.

```jsx
import { Avatar, FloatingList } from '@lightelligence/react';
<FloatingList>
<Avatar name="1" size="s" color="primary" />
<Avatar name="2" size="s" color="secondary" />
<Avatar name="E" size="s" color="error" />
<Avatar name="S" size="s" color="success" />
<Avatar name="I" size="s" color="info" />
<Avatar name="W" size="s" color="warning" />
<Avatar name="D" size="s" color="dark" />
</FloatingList>
```

## Presets

There are two presets `User`and `Tenant` that can be used for the avatar.

```jsx
import { Avatar, FloatingList } from '@lightelligence/react';
<FloatingList>
<Avatar type="user" name="U" />
<Avatar type="tenant" name="T" />
</FloatingList>
```
