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

All Icons:

```jsx
<>
  <Icon name="account" title="account" />
  <Icon name="add-default" title="add-default" />
  <Icon name="add-outline" title="add-outline" />
  <Icon name="app" title="app" />
  <Icon name="arrow-down" title="arrow-down" />
  <Icon name="arrow-falling" title="arrow-falling" />
  <Icon name="arrow-left" title="arrow-left" />
  <Icon name="arrow-raising" title="arrow-raising" />
  <Icon name="arrow-right" title="arrow-right" />
  <Icon name="arrow-up" title="arrow-up" />
  <Icon name="attachment" title="attachment" />
  <Icon name="brightness" title="brightness" />
  <Icon name="bullet-big" title="bullet-big" />
  <Icon name="bullet-small" title="bullet-small" />
  <Icon name="calendar" title="calendar" />
  <Icon name="cart" title="cart" />
  <Icon name="check-default" title="check-default" />
  <Icon name="check-filled" title="check-filled" />
  <Icon name="check-outline" title="check-outline" />
  <Icon name="chevron-down" title="chevron-down" />
  <Icon name="chevron-left" title="chevron-left" />
  <Icon name="chevron-right" title="chevron-right" />
  <Icon name="chevron-up" title="chevron-up" />
  <Icon name="clock" title="clock" />
  <Icon name="cloud" title="cloud" />
  <Icon name="code" title="code" />
  <Icon name="copy" title="copy" />
  <Icon name="dashboard" title="dashboard" />
  <Icon name="delete" title="delete" />
  <Icon name="device" title="device" />
  <Icon name="document" title="document" />
  <Icon name="download" title="download" />
  <Icon name="duplicate" title="duplicate" />
  <Icon name="edit" title="edit" />
  <Icon name="emission" title="emission" />
  <Icon name="enter" title="enter" />
  <Icon name="failure" title="failure" />
  <Icon name="favorite-outline" title="favorite-outline" />
  <Icon name="favorite-filled" title="favorite-filled" />
  <Icon name="fill" title="fill" />
  <Icon name="filter" title="filter" />
  <Icon name="floorplan" title="floorplan" />
  <Icon name="help-filled" title="help-filled" />
  <Icon name="help-outline" title="help-outline" />
  <Icon name="home" title="home" />
  <Icon name="hourglass" title="hourglass" />
  <Icon name="humidity" title="humidity" />
  <Icon name="info-filled" title="info-filled" />
  <Icon name="info-outline" title="info-outline" />
  <Icon name="key" title="key" />
  <Icon name="led" title="led" />
  <Icon name="lifetime" title="lifetime" />
  <Icon name="light" title="light" />
  <Icon name="external" title="external" />
  <Icon name="live" title="live" />
  <Icon name="location" title="location" />
  <Icon name="locked" title="locked" />
  <Icon name="logo" title="logo" />
  <Icon name="maintenance" title="maintenance" />
  <Icon name="message" title="message" />
  <Icon name="move" title="move" />
  <Icon name="close" title="close" />
  <Icon name="handle" title="handle" />
  <Icon name="menu" title="menu" />
  <Icon name="ellipsis" title="ellipsis" />
  <Icon name="notification-active" title="notification-active" />
  <Icon name="notification-default" title="notification-default" />
  <Icon name="office" title="office" />
  <Icon name="power" title="power" />
  <Icon name="redirect" title="redirect" />
  <Icon name="refresh" title="refresh" />
  <Icon name="remove-filled" title="remove-filled" />
  <Icon name="remove-outline" title="remove-outline" />
  <Icon name="resize" title="resize" />
  <Icon name="restricted" title="restricted" />
  <Icon name="rocket" title="rocket" />
  <Icon name="save" title="save" />
  <Icon name="savings" title="savings" />
  <Icon name="search" title="search" />
  <Icon name="hidden" title="hidden" />
  <Icon name="visible" title="visible" />
  <Icon name="sensor" title="sensor" />
  <Icon name="settings" title="settings" />
  <Icon name="success" title="success" />
  <Icon name="temperature" title="temperature" />
  <Icon name="unlocked" title="unlocked" />
  <Icon name="upload" title="upload" />
  <Icon name="user-add" title="user-add" />
  <Icon name="user-default" title="user-default" />
  <Icon name="user-filled" title="user-filled" />
  <Icon name="warning-critical-filled" title="warning-critical-filled" />
  <Icon name="warning-critical-outline" title="warning-critical-outline" />
  <Icon name="warning-low-filled" title="warning-low-filled" />
  <Icon name="warning-low-outline" title="warning-low-outline" />
  <Icon name="warning-medium-filled" title="warning-medium-filled" />
  <Icon name="warning-medium-outline" title="warning-medium-outline" />
  <Icon name="zoom-in" title="zoom-in" />
  <Icon name="zoom-out" title="zoom-out" />
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




