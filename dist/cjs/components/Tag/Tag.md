
```jsx
<Tag>Tag</Tag>
```

#### Outline

```js
<Tag outline>Outline</Tag>
```

#### Colors

```js
<Tag color="primary">Primary</Tag>
<Tag color="secondary">Secondary</Tag>
<Tag color="info">Info</Tag>
<Tag color="error">Error</Tag>
<Tag color="success">Success</Tag>
```

#### Outline Colors

```js
<Tag color="primary" outline>Primary</Tag>
<Tag color="secondary" outline>Secondary</Tag>
<Tag color="info" outline>Info</Tag>
<Tag color="error" outline>Error</Tag>
<Tag color="success" outline>Success</Tag>
```

#### Icon

```js
<Tag onClick={() => alert("Tag closed!")} color="primary" selectable>
  Primary
  <Icon className="olt-Tag-icon" name="close"/>
</Tag>

<Tag onClick={() => alert("Tag closed!")} color="secondary" selectable>
  Secondary
  <Icon className="olt-Tag-icon" name="close"/>
</Tag>

```
#### Icon + Outline

```js
<Tag onClick={() => alert("Tag closed!")} outline color="primary">
  Primary
  <Icon className="olt-Tag-icon" name="close"/>
</Tag>
<Tag onClick={() => alert("Tag closed!")} outline color="secondary" selectable>
  Secondary
  <Icon className="olt-Tag-icon" name="close"/>
</Tag>
```
