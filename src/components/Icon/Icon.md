Interface for [olt icons](https://lightelligence-io.github.io/styles/#icon).

```jsx
<>
  <Icon name="locked" size="small" />
  <Icon name="locked" />
  <Icon name="calendar" color="info" />
  <Icon name="user-add" size="large" color="primary" />
  <Icon name="zoom-in" size="large"  />
</>
```

## Colors

### General

Interactive icons should be used with the primary color.
For decorative and non-interactive icons (e.g. input fields) the default is gray 500.

```jsx
<>
  <Icon name="check-filled" color="primary" />
  <Icon name="add-default" color="primary" />
  <Icon name="check-filled" color="secondary" />
  <Icon name="check-filled" />
  <Icon name="info-filled" color="info" />
  <Icon name="warning-critical-filled" color="error" />
  <Icon name="check-filled" color="success" />
</>
```
### Feedback

The new *Icon* set has filled and outline icons for feedback.
Three different versions indicate the importance of the warning.
Depending on the use case the icon color changes - info / warning / error.
To assign a color to the icon, use the `olt-Icon--*` classes as listed below.
If the icon is placed on a matching background color it has to be white.

```jsx
<Icon name="help-outline" color="info" />
<Icon name="info-outline" color="info" />
<Icon name="warning-low-outline" color="warning" />
<Icon name="warning-medium-outline" color="warning" />
<Icon name="warning-critical-outline" color="error" />
<Icon name="check-outline" color="success" />
<br/><br/>
<Icon name="help-filled" color="info" />
<Icon name="info-filled" color="info" />
<Icon name="warning-low-filled" color="warning" />
<Icon name="warning-medium-filled" color="warning" />
<Icon name="warning-critical-filled" color="error" />
<Icon name="check-filled" color="success" />
```

Sizes

## Sizes

The Icons exist in three different sizes - **24 x 24 / 16 x 16 / 12 x 12**.
Depending on the use case the correct icon has to be used.

* `olt-Icon--large`: **24 x 24** - icons that are used for decoration and standalone
* `olt-Icon--medium`: **16 x 16** - for input fields and sometimes for decoration, standalone and the edit action button
* `olt-Icon--small`: **12 x 12** - exclusively for buttons - primary, secondary and tertiary

```jsx
<>
  <Icon name="check-default" size="small" />
  <Icon name="check-default" size="medium" />
  <Icon name="check-default" size="large" />
</>
```




