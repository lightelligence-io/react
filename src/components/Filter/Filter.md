### Example

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

<div style={{ paddingBottom: '120px' }}>
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
</div>;
```
