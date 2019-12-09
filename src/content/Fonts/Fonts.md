## Description

The design system defines the fonts specified in the following for your application. We recommend to only use these predefined sizes and formatting and not mix it with any additional customizations.

```jsx
import { H500, H400, H300, H200, H100, Content, Description, Support, Code } from '@lightelligence/react';
<>
  <H500>Page Title</H500>
  <H400>Card Title</H400>
  <H300>Subtitle</H300>
  <H200>Content Title</H200>
  <H100>STEPPER TITLE</H100>
  <Content>Content</Content>
  <Description>Description</Description>
  <Support>Support</Support>
  <Code>Code</Code>
</>
```

## Color

A color property is supported for easy access to defined colors.

```jsx
import { H500, H400, H300, H200, H100 } from '@lightelligence/react';
<>
<H500 color="primary">Page Title</H500>
<H400 color="info">Card Title</H400>
<H300 color="grey500">Subtitle</H300>
<H200 color="error">Content Title</H200>
<H100 color="success">Stepper Title</H100>
</>
```

## Tag

In case, you want to adjust font-size without semantic emphasis, you can specify the underlying tag.

```jsx
import { H500 } from '@lightelligence/react';
<H500 tag="span">Page Title</H500>
```
