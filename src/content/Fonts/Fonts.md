As a part of the Design System 2.0 the typography hierarchies have been updated and the number of styles reduced.

```jsx
import { H500, H400, H300, H200, H100, Content, Description, Support, Code } from '@lightelligence/react';
<>
  <H500>
    Page Title
  </H500>
  <H400>
    Card Title
  </H400>
  <H300>
    Subtitle
  </H300>
  <H200>
    Content Title
  </H200>
  <H100>
    STEPPER TITLE
  </H100>
  <Content>
    Content
  </Content>
  <Description>
    Description
  </Description>
  <Support>
    Support
  </Support>
  <Code>
    Code
  </Code>
</>
```

In case, you want to adjust font-size without semantic emphasis, you can specify the underlying tag.

```jsx
import { H500 } from '@lightelligence/react';
<H500 tag="span">
  Page Title
</H500>
```
