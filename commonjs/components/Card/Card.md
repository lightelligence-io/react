#### Card with headline

```js
<Card title="Text">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```


#### Card with headline and subtitle.

```js
<Card
  title="Text"
  description="This is a very descriptive text"
>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```

#### Card with action item

```js
<Card
  title="Card with action"
  description="This is a very descriptive text"
  action={(
    <Icon onClick={() => alert('click')} name="more_vert"/>
  )}
>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```

#### Card with headline and action item only.

```js
<Card
  title="Hello World"
  description="This is a very descriptive text"
  action={(
    <Button onClick={() => {
      console.log('click');
    }}>
      Submit
    </Button>
  )}
/>
```


#### Card with content only.

```js
<Card>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```


#### Card as Button

```js
<Card
  title="Click here"
  description="...to use a card like a button"
  selectable
  action=<Icon className="olt-Card-icon" name="more_vert"/>
  onClick={() => {
    console.log('click');
  }}/>
```

#### Card as Links

```js
<Link to="https://google.com" target="_blank">
  <Card
    title="Title"
    description="Description"
    selectable
    action={(
      <Icon name="more_vert"/>
    )}
  >
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </Card>
</Link>
```


#### Context Cards

```js
<Card
  color="primary"
  title="Primary"
>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```

```js
<Card
  color="secondary"
  title="Secondary"
>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```

#### Card with teaser image

```js
<Card
  title="Teaser"
  image="https://picsum.photos/1160/600?image=1"
>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```

#### Card with divider

```js
<Card>
  Echo<Divider/>Echo
</Card>
```

#### Disabled Card

```js
<Card disabled>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Card>
```
