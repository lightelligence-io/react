## Description

You can use the Filter component to show a dropdown that opens a filter popup and displays an additional number representing the number of filters selected.

You can add any component inside the filter as child. E.g. a list of filters with an apply and reset button.


```jsx

import { Checkbox } from '@lightelligence/react';
import useOnClickOutside from 'use-onclickoutside';

const [open, setOpen] = React.useState(false);
const [deviceTypeFilter, setDeviceTypeFilter] = React.useState(false);
const [deviceNameFilter, setDeviceNameFilter] = React.useState(false);
const filters = [deviceTypeFilter, deviceNameFilter];
const count = filters.filter((value) => !!value).length;
const ref = React.useRef(null);

useOnClickOutside(ref, () => setOpen(false));
<Filter
  ref={ref}
  label="Filter"
  bubbleText={count.toString()}
  onClick={() => setOpen(!open)}
  open={open}
>
  <div className="olt-u-padding16">
    <Checkbox checked={deviceTypeFilter} onChange={setDeviceTypeFilter}>
      Device Type
    </Checkbox>
    <Checkbox checked={deviceNameFilter} onChange={setDeviceNameFilter}>
      Device Name
    </Checkbox>
  </div>
</Filter>
;
```
