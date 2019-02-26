```jsx
import { Tag } from '@lightelligence/react';
<Tag>Tag</Tag>;
```

#### Outline

```js
import { Tag } from '@lightelligence/react';
<Tag outline>Outline</Tag>;
```

#### Colors

```js
import { Tag } from '@lightelligence/react';
<>
  <Tag color="primary">Primary</Tag>
  <Tag color="secondary">Secondary</Tag>
  <Tag color="info">Info</Tag>
  <Tag color="error">Error</Tag>
  <Tag color="success">Success</Tag>
</>;
```

#### Outline Colors

```js
import { Tag } from '@lightelligence/react';
<>
  <Tag color="primary" outline>
    Primary
  </Tag>
  <Tag color="secondary" outline>
    Secondary
  </Tag>
  <Tag color="info" outline>
    Info
  </Tag>
  <Tag color="error" outline>
    Error
  </Tag>
  <Tag color="success" outline>
    Success
  </Tag>
</>;
```

#### Icon

```js
import { Tag, Icon } from '@lightelligence/react';
<>
  <Tag onClick={() => alert('Tag closed!')} color="primary" selectable>
    Primary
    <Icon className="olt-Tag-icon" name="close" />
  </Tag>
  <Tag onClick={() => alert('Tag closed!')} color="secondary" selectable>
    Secondary
    <Icon className="olt-Tag-icon" name="close" />
  </Tag>
</>;
```

#### Icon + Outline

```js
import { Tag, Icon } from '@lightelligence/react';
<>
  <Tag onClick={() => alert('Tag closed!')} outline color="primary">
    Primary
    <Icon className="olt-Tag-icon" name="close" />
  </Tag>
  <Tag
    onClick={() => alert('Tag closed!')}
    outline
    color="secondary"
    selectable
  >
    Secondary
    <Icon className="olt-Tag-icon" name="close" />
  </Tag>
</>;
```
